import NextAuth from "next-auth";

declare module "next-auth" {
    interface JWT {
        access: string;
        refresh: string;
    }

    interface User {
        jwt?: JWT;
        role?: string;
        username?: string;
    }

    interface Session {
        jwt: JWT;
    }
}
