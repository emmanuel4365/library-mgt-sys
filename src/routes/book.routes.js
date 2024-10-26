import express from "express";
import { createBook } from "../controllers/createBook.controller.js";
import { retrieveAllBooks } from "../controllers/retrieveAllBooks.controller.js";
import { retrieveSingleBook } from "../controllers/retrieveSingleBook.controller.js";

const router = express.Router();

router.post("/book", createBook);
router.get("", retrieveAllBooks);
router.get("/book/:_id", retrieveSingleBook);

export default router;
