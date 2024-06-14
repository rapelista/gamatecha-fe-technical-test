import Link from "next/link";
import { Package2 } from "lucide-react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Navbar } from "@/components/dashboard/navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex flex-col h-full max-h-screen gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-semibold"
                        >
                            <Package2 className="w-6 h-6" />
                            <span className="">GAMMATECHA</span>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <Sidebar />
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <Navbar />
                <main className="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
