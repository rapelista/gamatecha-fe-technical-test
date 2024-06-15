import { getAccessToken, getUser } from "actions";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { AuthError } from "@auth/core/errors";
class CustomAuthorizeError extends AuthError {
    code = "ERROR";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    trustHost: true,
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                const { username, password } = credentials;
                const { access, refresh, detail } = await getAccessToken({
                    username,
                    password,
                });
                if (detail) {
                    throw new AuthError("Invalid Credentials");
                }
                const user = await getUser(access);
                return {
                    ...user,
                    name: `${user.first_name} ${user.last_name}`,
                    jwt: {
                        access,
                        refresh,
                    },
                };
            },
        }),
    ],
    // callbacks: {
    //     jwt: async ({ token, user }) => {
    //         if (user) {
    //             return {
    //                 ...token,
    //                 jwt: user.jwt,
    //                 role: user.role,
    //                 username: user.username,
    //             };
    //         }
    //         return token;
    //     },
    //     session: async ({ session, token }) => {
    //         if (token) {
    //             session.jwt = token.jwt as { access: string; refresh: string };
    //             session.user.role = token.role as string;
    //             session.user.username = token.username as string;
    //         }
    //         return session;
    //     },
    // },
});
