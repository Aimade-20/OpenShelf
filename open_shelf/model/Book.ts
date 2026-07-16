import mongoose , {Schema} from "mongoose";

const BooksSchema  = new Schema(
    {
        title : String ,
        authorm : String,
        isb : String,
        category : String,
        publicationYear : Number,
        description : String,
        available : String,
    },
    {
        timestamps : true
    }
)
export default mongoose.models.Book ||
  mongoose.model("Book", BooksSchema);