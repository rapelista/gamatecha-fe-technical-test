import { Users } from "@/components/dashboard/users";
import { UsersEmpty } from "@/components/dashboard/users-empty";
import UserType from "types/user";
import type { Metadata } from "next";
import { auth } from "auth";

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

export default async function HomePage() {
    const session = await auth();
    const token = session.jwt.access;
    const users = await getData(token);

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
