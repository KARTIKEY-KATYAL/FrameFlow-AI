import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function POST(req) {
    const {user} = await req.json();

    // Check if User exist in DB
    const userResult = await db.select().from(USER_TABLE)
    .where(eq(USER_TABLE.email,user?.primaryEmailAddress.emailAddress))

    // If Not Exist Save User in DB
    if (userResult?.length == 0){
        const result = await db.insert(USER_TABLE).values({
          name: user.fullName,
          email: user?.primaryEmailAddress.emailAddress,
        }).returning(USER_TABLE);

        return NextResponse.json(result);
    }

    console.log("done");
    
    
    // Else do Nothing
    return NextResponse.json(userResult);

    
}