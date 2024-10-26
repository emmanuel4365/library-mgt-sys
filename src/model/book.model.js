import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    edition: {
      type: String,
      required: true,
    },
    numberOfPages: {
      type: String,
      required: true,
    },
    availabilityStatus: {
      type: String,
      required: true,
      default: "available",
    },
    bookSummary: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Book", BookSchema);
