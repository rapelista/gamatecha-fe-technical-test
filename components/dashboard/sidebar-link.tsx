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
    return (
        <Link
            className={cn(pathName == href ? activeClassName : className)}
            href={href}
        >
            {children}
        </Link>
    );
};
