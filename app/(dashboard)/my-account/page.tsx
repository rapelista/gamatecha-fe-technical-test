import { PageHeading } from "@/components/dashboard/page-heading";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Account",
};

export default function HomePage() {
    return (
        <>
            <PageHeading>My Account</PageHeading>
            <div className="flex flex-col items-center justify-center gap-4 py-12 border border-dashed rounded-lg shadow-sm">
                <div>
                    <span className="text-2xl font-semibold">
                        Farih Akmal Haqiqi
                    </span>
                </div>
                <span className="italic">farih.282828@gmail.com</span>
                <div className="flex items-center gap-2">
                    <Badge>Admin</Badge>
                    <span className="-mt-2 text-sm font-semibold underline underline-offset-8 decoration-2">{`@${"gvstang"}`}</span>
                </div>
            </div>
        </>
    );
}
