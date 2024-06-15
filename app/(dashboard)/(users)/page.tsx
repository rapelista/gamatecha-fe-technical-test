import { Users } from "@/components/dashboard/users";
import { UsersEmpty } from "@/components/dashboard/users-empty";
import type { Metadata } from "next";
import { auth } from "auth";
import { redirect } from "next/navigation";
import { getUsers } from "actions";

export const metadata: Metadata = {
    title: "Users",
};

export default async function UsersPage() {
    const session = await auth();
    const {
        jwt: { access },
        user: { role },
    } = session;

    if (role === "owner") redirect("/articles");

    const users = await getUsers(access);

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
