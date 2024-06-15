import { NextRequest, NextResponse } from "next/server";
import dummyUsers from "@/lib/dummyUsers.json";
import UserType from "types/user";

export async function GET(request: NextRequest) {
    const users = dummyUsers as UserType[];
    return NextResponse.json(users);
}
