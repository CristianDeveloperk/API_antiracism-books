import { BookService } from "../services/book.service.js";
import { ERRORS, SUCCESS } from "../shared/messages.js";

const instanceBookService = new BookService();

const createBook = async (req, res) => {
        const { cover, name, author, publisher, genre, publicationDate, summary, relatedLinks } = req.body;
        if (!cover || !name || !author || !publisher || !genre || !publicationDate) {
            return res.status(400).json({ message: 'Missing required information' });
        }
        const newBook = await instanceBookService.createBookService(
            cover, name, author, 
            publisher, genre, publicationDate, 
            summary, relatedLinks 
        );
        res
            .status(201)
            .json({
                message: `Book ${SUCCESS.CREATED}!`,
                newBook
            });
}

const getAllBooks = async (req, res) => {
    const books = await instanceBookService.getAllBookService();
    res.json({books});
}

const getBookById = async (req, res) => {
    const { id } = req.params;
    const bookId = await instanceBookService.getBookByIdService(id);
    res.json({bookId});
}

const getBookByName = async (req, res) => {
    const { name } = req.params;
    const { bookName } = req.params
    const booksName = await instanceBookService.getBookByNameService(name, bookName);
    res.json({booksName});
}

const getBookByAuthor = async (req, res) => {
    const { author } = req.params;
    const { bookAuthor } = req.params;
    const bookAuthors = await instanceBookService.getBookByAuthorService(author, bookAuthor);
    res.json({bookAuthors});
}

const getBookByGenre = async (req, res) => {
    const { genre } = req.params;
    const { bookGenre } = req.params;
    const booksGenre = await instanceBookService.getBookByGenreService(genre, bookGenre);
    res.json({booksGenre});
}

const getBookByPublisher = async (req, res) => {
    const { publisher } = req.params; 
    const { bookPublisher } = req.params; 
    const bookPublishers = await instanceBookService.getBookByPublisherService(publisher, bookPublisher);
    res.json({bookPublishers});
}


const updateBook = async (req, res) => {
    const { id } = req.params;
    const { new_name } = req.body;
    const nameUpdate = await instanceBookService.updateBookService(id, new_name);
    res.json({nameUpdate});
}

const deleteBook = async (req, res) => {
    const { id } = req.params;
    const delBook = await instanceBookService.deleteBookService(id);
    res.json({message: `Book ${SUCCESS.DELETED}`});
}

export { createBook, getAllBooks, getBookById, getBookByName, getBookByAuthor, getBookByGenre, getBookByPublisher, updateBook, deleteBook }