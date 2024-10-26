import { StatusCodes } from "http-status-codes";
import Book from "../model/book.model.js";

export const updateReturnedBook = async (req, res) => {
  try {
    console.log(req.params);

    const bookData = await Book.findByIdAndUpdate(
      req.params,
      {
        availabilityStatus: "available",
      },
      { new: true }
    );

    res.status(StatusCodes.OK).json({
      status: "success",
      code: `${StatusCodes.OK}`,
      message: "Book returned successfully",
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
    }
    res.status(StatusCodes.BAD_REQUEST).json({
      status: "error",
      code: `${StatusCodes.BAD_REQUEST}`,
      message: `${error.message}`,
    });
  }
};
