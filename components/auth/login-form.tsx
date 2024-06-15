"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authenticate } from "actions";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "../ui/use-toast";

export const LoginWrapper = () => {
    const [formKey, setFormKey] = useState(0);
    const handleReset = () => setFormKey((prev) => prev + 1);
    return <LoginForm key={formKey} onReset={handleReset} />;
};

export const LoginForm = ({ onReset }) => {
    const ref = useRef(null);
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    useEffect(() => {
        if (errorMessage) {
            toast({
                description: errorMessage,
                variant: "destructive",
            });
            onReset();
        }
    }, [errorMessage, onReset]);

    return (
        <form action={dispatch} onReset={onReset} ref={ref}>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                        id="username"
                        name="username"
                        placeholder="john.doe"
                        required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="•••••••"
                        required
                    />
                </div>
            </CardContent>
            <CardFooter>
                <LoginButton />
            </CardFooter>
        </form>
    );
};

const LoginButton = () => {
    const { pending } = useFormStatus();

    const handleClick = (event) => {
        if (pending) {
            event.preventDefault();
        }
    };

    return (
        <Button
            aria-disabled={pending}
            className="w-full"
            type="submit"
            onClick={handleClick}
            disabled={pending}
        >
            Sign in
        </Button>
    );
};
