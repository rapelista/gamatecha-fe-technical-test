"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarLinkProps = {
    activeClassName?: string;
    className?: string;
    href: string;
    children: React.ReactNode;
};

export const SidebarLink = ({
    href,
    className,
    activeClassName,
    children,
}: SidebarLinkProps) => {
    const pathName = usePathname();
    const firstPath = pathName.split("/");
    const hrefPath = href.split("/");

    return (
        <Link
            className={cn(
                firstPath[1] === hrefPath[1] ? activeClassName : className
            )}
            href={href}
        >
            {children}
        </Link>
    );
};
