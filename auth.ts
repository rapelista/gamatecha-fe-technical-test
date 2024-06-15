import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                console.log(credentials);
                let user = null;

                user = {
                    id: 1,
                    name: "John Doe",
                    email: "john@doe",
                };

                if (!user) {
                    throw new Error("User not found.");
                }

                console.log(user);

                return user;
            },
        }),
    ],
});
