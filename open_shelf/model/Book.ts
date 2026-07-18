import mongoose, { Schema } from "mongoose";

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    isbn: {
      type: String,
      required: true,
      unique: true,
    },

    category: {
      type: String,
      required: true,
    },

    publicationYear: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Book ||
  mongoose.model("Book", BookSchema);