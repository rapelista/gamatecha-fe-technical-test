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
                const { access, detail } = await getAccessToken({
                    username,
                    password,
                });
                if (detail) {
                    throw new AuthError("Invalid Credentials");
                }
                const user = await getUser(access);
                return user;
            },
        }),
    ],
});
