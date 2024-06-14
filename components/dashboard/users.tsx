import UserType from "entities/User";
import { DataTable } from "../data-table";
import { columns } from "./users-columns";

interface UsersProps {
    users: UserType[];
}

export const Users = ({ users }: UsersProps) => {
    return <DataTable columns={columns} data={[...users, ...users]} />;
};
