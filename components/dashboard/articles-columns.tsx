/* eslint-disable @next/next/no-img-element */
"use client";

import { ArticleType } from "types/entities";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../data-table-column-head";
import { ArticleDialog } from "./article";

export const columns: ColumnDef<ArticleType>[] = [
    {
        accessorKey: "image",
        header: ({ column }) => {
            return <DataTableColumnHeader column={column} title="Thumbnail" />;
        },
        cell: ({
            row: {
                original: { image, title },
            },
        }) => {
            return (
                <div className="h-24 mx-auto overflow-hidden rounded-lg aspect-square">
                    <img
                        src={image}
                        alt={title}
                        className="object-cover w-full h-full"
                    />
                </div>
            );
        },
    },
    {
        accessorKey: "title",
        header: ({ column }) => {
            return <DataTableColumnHeader column={column} title="Title" />;
        },
        cell: ({ row: { original } }) => {
            return (
                <div className="hover:cursor-pointer">
                    <ArticleDialog {...original}>
                        <a>{original.title}</a>
                    </ArticleDialog>
                </div>
            );
        },
    },
    {
        accessorKey: "like",
        header: ({ column }) => {
            return <DataTableColumnHeader column={column} title="Like" />;
        },
        cell: ({
            row: {
                original: { like },
            },
        }) => {
            return <div className="text-center">{like}</div>;
        },
    },
    {
        accessorKey: "viewer",
        header: ({ column }) => {
            return <DataTableColumnHeader column={column} title="Viewer" />;
        },
        cell: ({
            row: {
                original: { viewer },
            },
        }) => {
            return <div className="text-center">{viewer}</div>;
        },
    },
    {
        accessorKey: "share",
        header: ({ column }) => {
            return <DataTableColumnHeader column={column} title="Share" />;
        },
        cell: ({
            row: {
                original: { share },
            },
        }) => {
            return <div className="text-center">{share}</div>;
        },
    },
];
