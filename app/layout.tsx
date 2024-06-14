import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        template: "%s | Gammatecha — Front-end Dev Test Case",
        default: "Gammatecha — Front-end Dev Test Case",
    },
    description:
        "Gammatecha front-end dev test case by @gvstang (Farih Akmal Haqiqi)",
};

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}
