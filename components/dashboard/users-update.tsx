import { UserType } from "@/types/entities";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogProps } from "@radix-ui/react-dialog";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../ui/use-toast";

export const UsersUpdate = ({
    user,
    ...props
}: DialogProps & {
    user: UserType;
}) => {
    const queryClient = useQueryClient();

    const { data: session } = useSession({
        required: true,
    });

    const { mutate, isPending } = useMutation({
        mutationFn: async (data: Partial<UserType>) =>
            await fetch(
                process.env.NEXT_PUBLIC_API_URL + "/api/users/" + user.id,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${session.jwt.access}`,
                    },
                    body: JSON.stringify(data),
                }
            ),
    });

    const handleSubmit = (formData: FormData) => {
        const data = {
            first_name: formData.get("first_name") as string,
            last_name: formData.get("last_name") as string,
            email: formData.get("email") as string,
        };

        if (
            data.email === user.email &&
            data.first_name === user.first_name &&
            data.last_name === user.last_name
        ) {
            toast({
                description: "No changes made.",
            });
            return;
        }

        mutate(data, {
            onSuccess: (res) => {
                if (res.status === 200) {
                    toast({
                        description: "User updated successfully!",
                        variant: "success",
                    });
                    queryClient.invalidateQueries({
                        queryKey: ["users"],
                    });
                    props.onOpenChange(false);
                } else {
                    toast({
                        description: "Failed to update user :(",
                        variant: "destructive",
                    });
                }
            },
        });
    };

    return (
        <Dialog {...props}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        {
                            "Make changes to user profile here. Click save when you're done."
                        }
                    </DialogDescription>
                </DialogHeader>
                <form action={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="first_name" className="text-right">
                                First Name
                            </Label>
                            <Input
                                id="first_name"
                                name="first_name"
                                defaultValue={user.first_name}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="last_name" className="text-right">
                                Last Name
                            </Label>
                            <Input
                                id="last_name"
                                name="last_name"
                                defaultValue={user.last_name}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                defaultValue={user.email}
                                className="col-span-3"
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
