import { unauthenticate } from "actions";
import { DropdownMenuItem } from "../ui/dropdown-menu";

export const LogoutForm = () => {
    return (
        <form action={unauthenticate}>
            <button className="w-full">
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </button>
        </form>
    );
};
