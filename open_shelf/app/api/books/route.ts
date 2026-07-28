import { bookSchema } from "@/lib/validation/bookSchema"
import connectDB from "../../../lib/mongodb"
import Book from "../../../model/Book"
import { NextResponse } from "next/server"

export async function POST(request : Request) {
    try {
        await connectDB()
         const body = await request.json()
         const validatedData = bookSchema.parse(body)
         await Book.create(validatedData)
         return NextResponse.json({
             success :true,
             message : "record has been inserted !"
         },
         {status :201}
     )
    } catch (error) {
        console.log("error",error);
        
        return NextResponse.json({
            success : false ,
            message : "Server Error",
        },
        {status : 500}
    )
    }
}
export async function GET() {
    try {
         await connectDB()
         const books = await Book.find()
         return NextResponse.json({
            success : true,
            books
         },
        {status : 200}
        )
    } catch (error) {
        return NextResponse.json({
            success : false,
            message :"Server Error",
        },
        {status : 500}
    )
    }
}




