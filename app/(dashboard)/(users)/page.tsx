import { Users } from "@/components/dashboard/users";
import { UsersEmpty } from "@/components/dashboard/users-empty";
import UserType from "entities/User";
import type { Metadata } from "next";
import dummyUsers from "@/lib/dummyUsers.json";

export const metadata: Metadata = {
    title: "Users",
};

const getData = async (): Promise<UserType[]> => {
    return dummyUsers;
};

export default async function HomePage() {
    const users = await getData();

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
