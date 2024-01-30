
const fastify = require('fastify')({

    logger: true

});

const PORT = 5005;

fastify.get('/', (resquest, reply) => {
    reply.send('Servidor Rodando no Nodemon! Digital College!')
})

fastify.get('/clientes', (resquest, reply) => {
    reply.send('-- Ambiente dos Clientes -- !')
})

fastify.get('/produtos', (resquest, reply) => {
    reply.send('-- Ambiente Produtos --!')
})

fastify.listen( {port: PORT}, (err, address) => {
    
    if(err)
    console.log(`Server is now listening on ${address}`);
});
