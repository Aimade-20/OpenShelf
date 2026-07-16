import connectDB from "../../../lib/mongodb"
import Book from "../../../model/Book"
import { NextResponse } from "next/server"

export async function POST(request : Request) {
    try {
        
        await connectDB()
         const {title ,author, isbn ,category ,publicationYear,description} = await request.json()
         await Book.create({title ,author, isbn ,category ,publicationYear,description})
         return NextResponse.json({
             success :true,
             message : "record has been inserted !"
         },
         {status :201}
     )
    } catch (error) {
        return NextResponse.json({
            success : false ,
            message : "Server Error",
        },
        {status : 500}
    )
    }
}
export async function GET(request: Request) {
    try {
        
    } catch (error) {
        
    }
}


