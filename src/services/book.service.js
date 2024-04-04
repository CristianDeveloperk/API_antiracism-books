import BookEntity from "../entities/Book.entity.js";
import { Op } from "sequelize";

class BookService {
    async createBookService(cover, name, author, publisher, genre, publicationDate, summary, relatedLinks){
        try {
            await BookEntity.sync();
            const newBook = await BookEntity.create({
                cover, name, author, publisher, genre, publicationDate, summary, relatedLinks
            });
            return newBook;
        } catch (error) {
            return error;
        }
    }

    async getAllBookService() {
        try {
            const books = await BookEntity.findAll();
            return books;
        } catch (error) {
            return error;
        }
    }

    async getBookByIdService(id) {
        try {
            const bookId = await BookEntity.findByPk(id);
            if (!bookId) {
                return `Book ${ERROR.NOT_FOUND}`;
            }
            return bookId;
        } catch (error) {
            return error;
        }
    }

    async getBookByNameService(name, bookName) {
        try {
            const booksWithName = await BookEntity.findAll({
                where: {
                    name
                }
            });
            const filteredBooksName = booksWithName.filter(book => book.name !== bookName)
            return filteredBooksName;
        } catch (error) {
            return error
        }
    }

    async getBookByAuthorService(author, bookAuthor) {
        try {
            const booksWithAuthor = await BookEntity.findAll({
                where: {
                    author: {
                        [Op.like]: `%${author}%`
                    }
                }
            });
            const filteredBooksAuthor = booksWithAuthor.filter(book => book.author !== bookAuthor);
            return filteredBooksAuthor;
        } catch (error) {
            return error;
        }
    }

async getBookByPublisherService(publisher, bookPublisher) {
    try {
        const booksWithPublisher = await BookEntity.findAll({
            where: {
                publisher
            }
        });
        const filteredBooks = booksWithPublisher.filter(book => book.publisher !== bookPublisher);
        return filteredBooks;
    } catch (error) {
        return error;
    }
}



    async getBookByGenreService(genre, bookGenre) {
        try {
            const booksWithGenre = await BookEntity.findAll({
                where: {
                    genre: {
                        [Op.like]: `%${genre}%` // Usando uma consulta LIKE para encontrar todos os livros que contêm o gênero pesquisado
                    }
                }
            });
            const filteredBooksGenre = booksWithGenre.filter(book => book.genre !== bookGenre);
            return filteredBooksGenre
        } catch (error) {
            return error;
        }
    }

    async updateBookService(id, newName){
        try {
            const bookID = await BookEntity.findByPk(id)
            if (!bookID) {
                return `Book ${ERROR.NOT_FOUND}`;
            }
            await BookEntity.update({name: newName}, {
                where: {
                    id
                }
            });
            const messageUpdate = await BookEntity.findByPk(id);
            return messageUpdate
        } catch (error) {
            return error;
        }

    }

    async deleteBookService(id) {
        try {
            const bookID = await BookEntity.findByPk(id);
            if(!bookID) {
                return `Book ${ERROR.NOT_FOUND}!`
            }
            await BookEntity.destroy({where: {id}});
            return `Book ${SUCCESS.DELETED}`;
        } catch (error) {
            return error            
        }
    }

}

export { BookService }
