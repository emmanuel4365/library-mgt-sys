import { StatusCodes } from "http-status-codes";
import Book from "../model/book.model.js";

export const retrieveSingleBook = async (req, res) => {
  try {
    const bookData = await Book.findById(req.params);

    if (bookData === null) {
      console.log("cool");

      const message = `No book with id: ${req.params._id}`;
      res.status(StatusCodes.NOT_FOUND).json({
        status: "error",
        code: `${StatusCodes.NOT_FOUND}`,
        message,
      });
      return;
    }

    res.status(StatusCodes.OK).json({
      status: "success",
      code: `${StatusCodes.OK}`,
      message: "Books retrieved successfully",
      data: { bookData },
    });
  } catch (error) {
    if (error.message.includes("_id")) {
      const message = `No book with id: ${req.params._id}`;
      res.status(StatusCodes.NOT_FOUND).json({
        status: "error",
        code: `${StatusCodes.NOT_FOUND}`,
        message,
      });
      return;
    }
    res.status(StatusCodes.BAD_REQUEST).json({
      status: "error",
      code: `${StatusCodes.BAD_REQUEST}`,
      message: `${error.message}`,
    });
  }
};
