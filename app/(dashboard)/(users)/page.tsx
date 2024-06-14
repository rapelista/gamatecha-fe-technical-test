import { Users } from "@/components/dashboard/users";
import { UsersEmpty } from "@/components/dashboard/users-empty";
import UserType from "entities/User";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Users",
};

const getData = async (): Promise<UserType[]> => {
    const host = process.env.API_URL;

    const res = await fetch(host + "/api/users", {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }
    return res.json();
};

export default async function HomePage() {
    const users = await getData();

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
