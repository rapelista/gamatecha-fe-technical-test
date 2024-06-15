/* eslint-disable @next/next/no-img-element */
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ArticleType } from "types/entities";
import { useState } from "react";

export function ArticleDialog({
    title,
    image,
    description,
    date,
    children,
}: ArticleType & { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const formatDate = (date: string) => {
        const [_dateDay, dateTime] = date.split(".")[0].split("T");
        const dateDay = _dateDay.split("-").reverse().join("/");

        return `${dateDay} ${dateTime}`;
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[768px] overflow-y-scroll max-h-screen md:max-h-[96vh] p-12">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        <span className="italic">{formatDate(date)}</span>
                    </DialogDescription>
                    <div className="py-4 overflow-hidden aspect-video">
                        <img
                            src={image}
                            alt={title}
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                    <DialogDescription className="text-justify">
                        {description}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
