import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { UsersUpdate } from "./users-update";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { UserType } from "@/types/entities";
import { UsersDelete } from "./users-delete";

export const UsersAction = (user: UserType) => {
    const [isOpenUpdate, setIsOpenUpdate] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);

    return (
        <>
            <UsersUpdate
                open={isOpenUpdate}
                onOpenChange={setIsOpenUpdate}
                user={user}
            />
            <UsersDelete
                open={isOpenDelete}
                onOpenChange={setIsOpenDelete}
                user={user}
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-8 h-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="w-4 h-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setIsOpenUpdate(true)}>
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setIsOpenDelete(true)}>
                        <span className="text-red-500">Delete</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};
