import { NextResponse } from "next/server";

export async function GET(request: Request) {
    console.log('log',request);
    return NextResponse.json({
        hello:' world'
    })
}