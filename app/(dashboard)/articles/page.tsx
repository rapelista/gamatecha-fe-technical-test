import { PageHeading } from "@/components/dashboard/page-heading";
import { Button } from "@/components/ui/button";

export default function HomePage() {
    return (
        <>
            <PageHeading>Articles</PageHeading>
            <div
                className="flex items-center justify-center flex-1 border border-dashed rounded-lg shadow-sm"
                x-chunk="dashboard-02-chunk-1"
            >
                <div className="flex flex-col items-center gap-1 text-center">
                    <h3 className="text-2xl font-bold tracking-tight">
                        You have no articles
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        You can start writing as soon as you add a article.
                    </p>
                    <Button className="mt-4">Add Article</Button>
                </div>
            </div>
        </>
    );
}
