import { ModeToggle } from "../theme-mode-toggle";
import { Separator } from "../ui/separator";
import { NavbarDropdown } from "./navbar-dropdown";
import { SidebarMobile } from "./sidebar";

export const Navbar = () => (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <SidebarMobile />
        <div className="flex flex-row-reverse items-center flex-1 h-8 gap-4">
            <ModeToggle />
            <Separator orientation="vertical" />
            <NavbarDropdown />
        </div>
    </header>
);
