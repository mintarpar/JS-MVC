const Book = require("../models/bookModel");

const createBook = async (request, reply) => {
    try {
        const { title, author, release_date, subject } = request.body;
        const newBook = await Book.create({ title, author, release_date, subject });
        reply.status(201).send(newBook);
    } catch (error) {
        reply.status(500).send({ error: 'Error creating book' });
    }
};

const getAllBooks = async (request, reply) => {
    try {
        const books = await Book.findAll();
        reply.status(200).send(books);
    } catch (error) {
        reply.status(500).send({ error: 'Error fetching books' });
    }
};

const getBookById = async (request, reply) => {
    try {
        const book = await Book.findByPk(request.params.id);
        if (!book) return reply.status(404).send({ error: 'Book not found' });
        reply.status(200).send(book);
    } catch (error) {
        reply.status(500).send({ error: 'Error fetching book' });
    }
};

const updateBook = async (request, reply) => {
    try {
        const { title, author, release_date, subject } = request.body;
        const [updated] = await Book.update({ title, author, release_date, subject }, {
            where: { id: request.params.id }
        });
        if (!updated) return reply.status(404).send({ error: 'Book not found' });
        const updatedBook = await Book.findByPk(request.params.id);
        reply.status(200).send(updatedBook);
    } catch (error) {
        reply.status(500).send({ error: 'Error updating book' });
    }
};

const deleteBook = async (request, reply) => {
    try {
        const deleted = await Book.destroy({
            where: { id: request.params.id }
        });
        if (!deleted) return reply.status(404).send({ error: 'Book not found' });
        reply.status(204).send();
    } catch (error) {
        reply.status(500).send({ error: 'Error deleting book' });
    }
};

module.exports = { createBook, getAllBooks, getBookById, updateBook, deleteBook };
