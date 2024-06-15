"use server";

import { UserType } from "@/types/entities";
import { signIn, signOut } from "auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

export async function authenticate(_currentState: unknown, formData: FormData) {
    try {
        await signIn("credentials", {
            redirectTo: "/",
            username: formData.get("username"),
            password: formData.get("password"),
        });

        redirect("/");
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
        if (error) {
            switch (error.type) {
                case "AuthError":
                    return `Login Failed! Please check your username and password again.`;
                default:
                    return "Something went wrong.";
            }
        }
        return error;
    }
}

export const unauthenticate = async () => {
    await signOut({
        redirectTo: "/auth",
    });
};

export async function getAccessToken(credentials: {
    username: string | unknown;
    password: string | unknown;
}) {
    const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/auth/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        }
    );

    const data: {
        refresh: string;
        access: string;
        detail: string;
    } = await res.json();

    return data;
}

export async function getUser(accessToken: string) {
    const userResponse = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/auth/me",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    if (userResponse.status !== 200) {
        console.log("error");
    }

    const user = await userResponse.json();
    return user;
}

export const getUsers = async (accessToken: string): Promise<UserType[]> => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (!res.ok) {
        return [];
    }
    return res.json();
};
