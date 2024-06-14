import { Column } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowDownUpIcon, ArrowUpIcon } from "lucide-react";

interface DataTableColumnHeaderProps<TData, TValue>
    extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>;
    title: string;
}

export function DataTableColumnHeader<TData, TValue>({
    column,
    title,
    className,
}: DataTableColumnHeaderProps<TData, TValue>) {
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>;
    }

    return (
        <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
                <ArrowDownIcon className="w-4 h-4 ml-2" />
            ) : column.getIsSorted() === "asc" ? (
                <ArrowUpIcon className="w-4 h-4 ml-2" />
            ) : (
                <ArrowDownUpIcon className="w-4 h-4 ml-2" />
            )}
        </Button>
    );
}
