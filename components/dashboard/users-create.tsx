"use client";

import { UserType } from "@/types/entities";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../ui/use-toast";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
export const UsersCreate = () => {
    const [open, onOpenChange] = useState(false);

    const queryClient = useQueryClient();

    const { data: session } = useSession({
        required: true,
    });

    const { mutate, isPending } = useMutation({
        mutationFn: async (data: Partial<UserType>) =>
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session.jwt.access}`,
                },
                body: JSON.stringify(data),
            }),
    });

    const handleSubmit = (formData: FormData) => {
        const data = {
            first_name: formData.get("first_name") as string,
            last_name: formData.get("last_name") as string,
            email: formData.get("email") as string,
            username: formData.get("username") as string,
            password: formData.get("password") as string,
            password_confirmation: formData.get(
                "password_confirmation"
            ) as string,
        };

        if (data.password !== data.password_confirmation) {
            toast({
                description: "Passwords do not match",
                variant: "destructive",
            });
            return;
        }

        mutate(data, {
            onSuccess: async (res) => {
                const data = await res.json();
                if (!data.username || !data.password) {
                    toast({
                        description: "Failed to create user :(",
                        variant: "destructive",
                    });
                } else {
                    toast({
                        description: "User created successfully!",
                        variant: "success",
                    });
                    queryClient.invalidateQueries({
                        queryKey: ["users"],
                    });
                    onOpenChange(false);
                }
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button>Add User</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[768px]">
                <DialogHeader>
                    <DialogTitle>Add User</DialogTitle>
                    <DialogDescription>
                        Fill in the form below to add a new user.
                    </DialogDescription>
                </DialogHeader>
                <form action={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid items-center grid-cols-3 gap-4">
                            <Label htmlFor="first_name" className="text-right">
                                First Name
                            </Label>
                            <Input
                                id="first_name"
                                name="first_name"
                                placeholder="John"
                                className="col-span-2"
                            />
                        </div>
                        <div className="grid items-center grid-cols-3 gap-4">
                            <Label htmlFor="last_name" className="text-right">
                                Last Name
                            </Label>
                            <Input
                                id="last_name"
                                name="last_name"
                                placeholder="Doe"
                                className="col-span-2"
                            />
                        </div>
                        <div className="grid items-center grid-cols-3 gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                placeholder="john@doe.com"
                                className="col-span-2"
                            />
                        </div>
                        <div className="grid items-center grid-cols-3 gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input
                                id="username"
                                name="username"
                                placeholder="johndoe"
                                className="col-span-2"
                                required
                            />
                        </div>
                        <div className="grid items-center grid-cols-3 gap-4">
                            <Label htmlFor="password" className="text-right">
                                Password
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="•••••••"
                                className="col-span-2"
                                required
                            />
                        </div>
                        <div className="grid items-center grid-cols-3 gap-4">
                            <Label
                                htmlFor="password_confirmation"
                                className="text-right"
                            >
                                Password Confirmation
                            </Label>
                            <Input
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                placeholder="•••••••"
                                className="col-span-2"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={isPending}>
                            Save changes
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

// export const UsersCreate = () => {
//     const [open, onOpenChange] = useState(false);

//         mutate(data, {
//             onSuccess: (res) => {
//                 if (res.status === 200) {
//                     toast({
//                         description: "User created successfully!",
//                         variant: "success",
//                     });
//                     queryClient.invalidateQueries({
//                         queryKey: ["users"],
//                     });
//                 } else {
//                     toast({
//                         description: "Failed to create user :(",
//                         variant: "destructive",
//                     });
//                 }
//             },
//             onSettled: () => onOpenChange(false),
//         });
//     };

// };
