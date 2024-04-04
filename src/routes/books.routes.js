import { Router } from "express";
import {
  createBook,
  getAllBooks,
  getBookByName,
  getBookById,
  getBookByAuthor,
  getBookByGenre,
  getBookByPublisher,
  updateBook,
  deleteBook,
} from "../controllers/Books.controller.js"

const bookRoute = Router();



bookRoute.get('/', (req, res) => {
    res.send('Olá, mundo! Esta é uma mensagem da rota GET.');
  });

bookRoute.get("/books", getAllBooks);

bookRoute.get("/get-book/:id", getBookById);

bookRoute.get("/get-book/:name", getBookByName);

bookRoute.get("/get-author/:author", getBookByAuthor);

bookRoute.get("/get-publisher/:publisher", getBookByPublisher);

bookRoute.get("/get-genre/:genre", getBookByGenre);

bookRoute.post("/create-book", createBook);

bookRoute.put( "/update-book/:id", updateBook );

bookRoute.delete("/delete-book/:id", deleteBook);


export { bookRoute };