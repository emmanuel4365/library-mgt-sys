import express from "express";
import { createBook } from "../controllers/createBook.controller.js";
import { retrieveAllBooks } from "../controllers/retrieveAllBooks.controller.js";
import { retrieveSingleBook } from "../controllers/retrieveSingleBook.controller.js";
import { updateBorrowedBook } from "../controllers/updateBorrowedBook.js";
import { updateReturnedBook } from "../controllers/updateReturnedBook.js";
import { deleteDamagedBook } from "../controllers/deleteDamagedBook.js";
import { deleteLostBook } from "../controllers/deleteLostBook.js";
import { deleteStolenBook } from "../controllers/deleteStolenBook.js";

const router = express.Router();

router.post("/book", createBook);
router.get("", retrieveAllBooks);
router.get("/book/:_id", retrieveSingleBook);
router.put("/borrowed-book/:_id", updateBorrowedBook);
router.put("/returned-book/:_id", updateReturnedBook);
router.delete("/damaged-book/:_id", deleteDamagedBook);
router.delete("/lost-book/:_id", deleteLostBook);
router.delete("/stolen-book/:_id", deleteStolenBook);

export default router;
