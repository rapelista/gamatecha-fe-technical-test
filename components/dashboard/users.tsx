"use client";
import { DataTable } from "@/components/data-table";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { columns } from "./users-columns";
import { UserType } from "types/entities";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { getUsers } from "actions";
import { UsersCreate } from "./users-create";

interface UsersProps {
    users: UserType[];
}

export const Users = ({ users }: UsersProps) => {
    const { data: session } = useSession({
        required: true,
    });

    const { data } = useQuery({
        queryKey: ["users"],
        queryFn: async () => await getUsers(session.jwt.access),
        initialData: users,
    });

    return (
        <DataTable columns={columns} data={data} rightTop={<UsersCreate />}>
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
    );
};
