import { StatusCodes } from "http-status-codes";
import Book from "../model/book.model.js";

export const retrieveAllBooks = async (req, res) => {
  try {
    const booksData = await Book.find({});

    res.status(StatusCodes.OK).json({
      status: "success",
      code: `${StatusCodes.OK}`,
      message: "Books retrieved successfully",
      data: { booksData },
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      status: "error",
      code: `${StatusCodes.BAD_REQUEST}`,
      message: `${error.message}`,
    });
  }
};
