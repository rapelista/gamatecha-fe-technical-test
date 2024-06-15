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
import { Button } from "../ui/button";

interface UsersProps {
    users: UserType[];
}

export const Users = ({ users }: UsersProps) => {
    return (
        <DataTable
            columns={columns}
            data={users}
            rightTop={<Button>Add User</Button>}
        >
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
