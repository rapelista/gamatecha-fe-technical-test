"use client";

/* eslint-disable @next/next/no-img-element */
import { ArticleType } from "types/entities";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArticleDialog } from "./article";

export const ArticlesGrid = ({
    articles,
    children,
    pagination,
}: {
    articles: ArticleType[];
    children: React.ReactNode;
    pagination: React.ReactNode;
}) => (
    <>
        {children}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {articles.map(({ title, image, caption, ...original }, key) => (
                <div key={`article-${key}`} className="hover:cursor-pointer">
                    <ArticleDialog {...{ ...original, title, image, caption }}>
                        <Card className="overflow-hidden">
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={image}
                                    alt={title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <CardHeader>
                                <h3 className="text-lg font-semibold truncate">
                                    {title}
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500 line-clamp-2">
                                    {caption}
                                </p>
                            </CardContent>
                        </Card>
                    </ArticleDialog>
                </div>
            ))}
        </div>
        {pagination}
    </>
);
