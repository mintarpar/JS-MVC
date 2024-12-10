const fastify = require("fastify")({ logger: true });
const { connectDB } = require("./db");
const bookRoutes = require("./routes/bookRoutes");

connectDB();

fastify.register(bookRoutes);


fastify.get('/', async (request, reply) => {
    return { message: 'Me, again!' };
  });

const start = async () => {
    try {
        await fastify.listen({ port: 3001, host: '127.0.0.1' });
        console.log('Server listening at http://localhost:3001');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();
