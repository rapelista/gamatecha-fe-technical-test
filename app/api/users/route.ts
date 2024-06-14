import { NextRequest, NextResponse } from "next/server";
import dummyUsers from "./dummyUsers.json";
import UserType from "entities/User";

export async function GET(request: NextRequest) {
    const users = dummyUsers as UserType[];
    return NextResponse.json(users);
}
