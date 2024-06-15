import { UserType } from "@/types/entities";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../ui/use-toast";
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";

export const UsersDelete = ({
    user,
    ...props
}: AlertDialogProps & {
    user: UserType;
}) => {
    const queryClient = useQueryClient();

    const { data: session } = useSession({
        required: true,
    });

    const { mutate, isPending } = useMutation({
        mutationFn: async (id: number) =>
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users/" + id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session.jwt.access}`,
                },
            }),
    });

    const handleSubmit = () => {
        mutate(user.id, {
            onSuccess: async (res) => {
                if (res.status === 204) {
                    toast({
                        description: "User deleted successfully!",
                        variant: "success",
                    });
                    queryClient.invalidateQueries({
                        queryKey: ["users"],
                    });
                } else {
                    toast({
                        description: "Something went wrong!",
                        variant: "destructive",
                    });
                }
            },
            onSettled: () => props.onOpenChange(false),
        });
    };

    return (
        <AlertDialog {...props}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleSubmit}
                        disabled={isPending}
                    >
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
