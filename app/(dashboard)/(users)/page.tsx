import { Users } from "@/components/dashboard/users";
import { UsersEmpty } from "@/components/dashboard/users-empty";
import UserType from "entities/User";
import type { Metadata } from "next";
import dummyUsers from "@/lib/dummyUsers.json";

export const metadata: Metadata = {
    title: "Users",
};

const getData = async (): Promise<UserType[]> => {
    const host = process.env.API_URL;
    console.log(`host: ${host}`);

    const res = await fetch(host + "/api/users");
    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }
    return res.json();
};

export default async function HomePage() {
    const users = await getData();

    console.log(`Users: ${users.length}`);

    return (
        <>
            {!users || users.length === 0 ? (
                <UsersEmpty />
            ) : (
                <Users users={[...users, ...users, ...users, ...users]} />
            )}
        </>
    );
}
