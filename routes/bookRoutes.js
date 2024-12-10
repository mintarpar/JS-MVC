const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require("../controllers/bookController");

async function bookRoutes(fastify, options) {
    fastify.post("/books", createBook);
    fastify.get("/books", getAllBooks);
    fastify.get("/books/:id", getBookById);
    fastify.put("/books/:id", updateBook);
    fastify.delete("/books/:id", deleteBook);
}

module.exports = bookRoutes;
