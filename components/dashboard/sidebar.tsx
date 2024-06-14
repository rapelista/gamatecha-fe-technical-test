import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    Menu,
    Package2,
    LucideProps,
    Users2Icon,
    NewspaperIcon,
} from "lucide-react";
import Link from "next/link";
import { SidebarLink } from "@/components/dashboard/sidebar-link";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "../theme-mode-toggle";

type SidebarItemType = {
    Icon: React.ComponentType<LucideProps>;
    label: string;
    href: string;
};

const sidebarItems: SidebarItemType[] = [
    {
        Icon: Users2Icon,
        label: "Users",
        href: "/",
    },
    {
        Icon: NewspaperIcon,
        label: "Articles",
        href: "/articles",
    },
];

export const Sidebar = () => (
    <>
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {sidebarItems.map(({ href, label, Icon }, key) => (
                <SidebarLink
                    key={`sidebar-${key}`}
                    href={href}
                    className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
                    activeClassName="flex items-center gap-3 px-3 py-2 transition-all rounded-lg bg-muted text-primary hover:text-primary"
                >
                    <Icon className="w-4 h-4" />
                    {label}
                </SidebarLink>
            ))}
        </nav>
        <div className="flex flex-col items-end justify-end flex-1 p-4">
            <ModeToggle />
        </div>
    </>
);

export const SidebarMobile = () => (
    <Sheet>
        <SheetTrigger asChild>
            <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
            >
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle navigation menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
                <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                >
                    <Package2 className="w-6 h-6" />
                    <span className="sr-only">GAMMATECH</span>
                </Link>
                <Separator className="my-2" />
                {sidebarItems.map(({ href, label, Icon }, key) => (
                    <SidebarLink
                        key={`sidebar-mobile-${key}`}
                        href={href}
                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        activeClassName="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                    >
                        {label}
                    </SidebarLink>
                ))}
            </nav>
            <div className="flex items-end justify-end flex-1">
                <ModeToggle />
            </div>
        </SheetContent>
    </Sheet>
);
