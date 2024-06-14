import { LoginForm } from "@/components/auth/login-form";
import { ModeToggle } from "@/components/theme-mode-toggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
};

export default function AuthPage() {
    return (
        <div className="flex items-center justify-center h-screen gap-2">
            <LoginForm />
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4">
                <ModeToggle />
            </div>
        </div>
    );
}
