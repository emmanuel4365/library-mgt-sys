import { StatusCodes } from "http-status-codes";
import Book from "../model/book.model.js";

export const createBook = async (req, res) => {
  try {
    const bookData = await Book.create(req.body);

    res.status(StatusCodes.CREATED).json({
      status: "success",
      code: `${StatusCodes.CREATED}`,
      message: "Book created successfully",
      data: { bookData },
    });
  } catch (error) {
    if (error.message.includes("numberOfPages")) {
      let message = "Number of pages is required";
      res.status(StatusCodes.BAD_REQUEST).json({
        status: "error",
        code: `${StatusCodes.BAD_REQUEST}`,
        message: `${message}`,
      });
    }

    if (error.message.includes("title")) {
      let message = "The `title` field is required";
      res.status(StatusCodes.BAD_REQUEST).json({
        status: "error",
        code: `${StatusCodes.BAD_REQUEST}`,
        message: `${message}`,
      });
    }

    if (error.message.includes("author")) {
      let message = "The `author` field is required";
      res.status(StatusCodes.BAD_REQUEST).json({
        status: "error",
        code: `${StatusCodes.BAD_REQUEST}`,
        message: `${message}`,
      });
    }

    if (error.message.includes("genre")) {
      let message = "The `genre` field is required";
      res.status(StatusCodes.BAD_REQUEST).json({
        status: "error",
        code: `${StatusCodes.BAD_REQUEST}`,
        message: `${message}`,
      });
    }

    if (error.message.includes("publicationDate")) {
      let message = "The `publication date` field is required";
      res.status(StatusCodes.BAD_REQUEST).json({
        status: "error",
        code: `${StatusCodes.BAD_REQUEST}`,
        message: `${message}`,
      });
    }

    if (error.message.includes("edition")) {
      let message = "The `edition` field is required";
      res.status(StatusCodes.BAD_REQUEST).json({
        status: "error",
        code: `${StatusCodes.BAD_REQUEST}`,
        message: `${message}`,
      });
    }

    if (error.message.includes("bookSummary")) {
      let message = "The `book summary` field is required";
      res.status(StatusCodes.BAD_REQUEST).json({
        status: "error",
        code: `${StatusCodes.BAD_REQUEST}`,
        message: `${message}`,
      });
    }

    res.status(StatusCodes.BAD_REQUEST).json({
      status: "error",
      code: `${StatusCodes.BAD_REQUEST}`,
      message: `${error.message}`,
    });
  }
};
