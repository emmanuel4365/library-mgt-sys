import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/book.routes.js";
import { StatusCodes } from "http-status-codes";

dotenv.config();

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline'; img-src 'self' https://res.cloudinary.com; font-src 'self'; style-src 'self' 'unsafe-inline'"
  );

  next();
});

app.use("/api/v1/books", router);

app.get("/", (req, res) => {
  res.send("Hello backenders");
});

app.use("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({
    status: "error",
    code: `${StatusCodes.NOT_FOUND}`,
    message: "Not Found",
  });
});

const port = process.env.PORT || 5000;

try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database connected");

  app.listen(port, () => {
    console.log(`Server is listening on PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
