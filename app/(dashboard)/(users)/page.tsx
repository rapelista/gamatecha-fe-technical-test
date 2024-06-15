import { Users } from "@/components/dashboard/users";
import { UsersEmpty } from "@/components/dashboard/users-empty";
import { UserType } from "types/entities";
import type { Metadata } from "next";
import { auth } from "auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Users",
};

const getData = async (accessToken: string): Promise<UserType[]> => {
    const res = await fetch(process.env.NEXT_API_URL + "/api/users", {
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

export default async function UsersPage() {
    const session = await auth();
    const {
        jwt: { access },
        user: { role },
    } = session;

    if (role === "owner") redirect("/articles");

    const users = await getData(access);

    return (
        <>
            {!users || users.length === 0 ? (
                <UsersEmpty />
            ) : (
                <Users users={users} />
            )}
        </>
    );
}
