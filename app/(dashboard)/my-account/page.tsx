import { PageHeading } from "@/components/dashboard/page-heading";
import { Badge } from "@/components/ui/badge";
import { auth } from "auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "My Account",
};

export default async function MyAccountPage() {
    const session = await auth();
    const { role, name, email, username } = session.user;
    if (role !== "owner") redirect("/");

    return (
        <>
            <PageHeading>My Account</PageHeading>
            <div className="flex flex-col items-center justify-center gap-4 py-12 border border-dashed rounded-lg shadow-sm">
                <div>
                    <span className="text-2xl font-semibold">{name}</span>
                </div>
                <span className="italic">{email}</span>
                <div className="flex items-center gap-2">
                    <Badge>{role.toUpperCase()}</Badge>
                    <span className="-mt-2 text-sm font-semibold underline underline-offset-8 decoration-2">{`@${username}`}</span>
                </div>
            </div>
        </>
    );
}
