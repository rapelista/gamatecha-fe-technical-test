import { LoginForm } from "@/components/auth/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
};

export default function AuthPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <LoginForm />
        </div>
    );
}
