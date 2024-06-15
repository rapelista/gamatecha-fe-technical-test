import { DataTable } from "@/components/data-table";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { columns } from "./articles-columns";
import { ArticleType } from "types/entities";
import { Button } from "../ui/button";
import Link from "next/link";
import { isAdmin } from "@/lib/utils";
import { ArticlesGrid } from "./articles-grid";

interface ArticlesProps {
    articles: ArticleType[];
    page: string;
}

export const Articles = async ({ articles, page }: ArticlesProps) => {
    const renderBreadcrumb = () => {
        return (
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Articles</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Page {page}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        );
    };
    const renderPagination = () => {
        if (page === "1") {
            return (
                <div className="flex items-center justify-center gap-2 pt-4">
                    <Button variant="outline" className="w-8 h-8 p-0" disabled>
                        1<span className="sr-only">1</span>
                    </Button>
                    <Link href="/articles/2">
                        <Button variant="outline" className="w-8 h-8 p-0">
                            2<span className="sr-only">2</span>
                        </Button>
                    </Link>
                </div>
            );
        } else {
            return (
                <div className="flex items-center justify-center gap-2 pt-4">
                    <Link href="/articles/1">
                        <Button variant="outline" className="w-8 h-8 p-0">
                            1<span className="sr-only">1</span>
                        </Button>
                    </Link>
                    <Button variant="outline" className="w-8 h-8 p-0" disabled>
                        2<span className="sr-only">2</span>
                    </Button>
                </div>
            );
        }
    };

    if (!(await isAdmin())) {
        return (
            <ArticlesGrid articles={articles} pagination={renderPagination()}>
                {renderBreadcrumb()}
            </ArticlesGrid>
        );
    }

    return (
        <DataTable
            columns={columns}
            data={articles}
            initialPageSize={10}
            withDefaultPagination={false}
            customPagination={renderPagination()}
            filterBy={"title"}
        >
            {renderBreadcrumb()}
        </DataTable>
    );
};
