import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Book from "@/model/Book";
import { bookSchema } from "@/lib/validation/bookSchema";

export async function GET(request: Request,{ params }: { params: Promise<{ id: string }> }) {
  try {
    await connectDB();
    const { id } = await params;
    const book = await Book.findById(id);
    return NextResponse.json(
      {
        success: true,
        book,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log(error);
    
    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      {
        status: 404,
      },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;

    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return NextResponse.json(
        {
          success: false,
          message: "Book not found",
        },
        { status: 404 },
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "Book deleted successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();
    const validatedData = bookSchema.parse(body);
    await Book.findByIdAndUpdate(id, validatedData);
    if (!Book) {
      return NextResponse.json(
        {
          success: false,
          message: "Book not found",
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "book has been updated!",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Server Error !",
      },
      { status: 500 },
    );
  }
}
