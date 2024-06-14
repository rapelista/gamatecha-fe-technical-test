import { columns } from "@/components/dashboard/users-columns";
import { UsersEmpty } from "@/components/dashboard/users-empty";
import { DataTable } from "@/components/data-table";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import UserType from "entities/User";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Users",
};

const getData = async (): Promise<UserType[]> => {
    const res = await fetch("http://localhost:3000/api/users");
    if (!res.ok) {
        throw new Error("Failed to fetch users 🚨");
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
                <DataTable columns={columns} data={users}>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Users</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </DataTable>
            )}
        </>
    );
}
