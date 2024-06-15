import { LoginForm } from "@/components/auth/login-form";
import { ModeToggle } from "@/components/theme-mode-toggle";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
};

export default function AuthPage() {
    return (
        <div className="flex items-center justify-center h-screen gap-2">
            <Card className="w-full max-w-sm mx-2 md:mx-0">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your username and password below to login to your
                        account.
                    </CardDescription>
                </CardHeader>
                <LoginForm />
            </Card>

            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4">
                <ModeToggle />
            </div>
        </div>
    );
}
