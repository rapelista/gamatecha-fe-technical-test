import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const LoginForm = () => {
    async function handleSubmit(formData: FormData) {
        "use server";
        const rawData = {
            username: formData.get("username"),
            password: formData.get("password"),
        };

        console.log(rawData);
    }

    return (
        <Card className="w-full max-w-sm mx-2 md:mx-0">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your username and password below to login to your
                    account.
                </CardDescription>
            </CardHeader>
            <form action={handleSubmit}>
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
                    <Button className="w-full" type="submit">
                        Sign in
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
};
