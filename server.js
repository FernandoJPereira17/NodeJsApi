import Fastify from 'fastify'
import { produtoService } from './services/produtos.service.js'
import { produtos } from './db/produtos.js'

const fastify = Fastify({
    logger: false
  })

const PORT = 5005

fastify.get('/', (request, reply) => {
    reply.send('Servidor Rodando - Nodemon!')
})

fastify.get('/produtos', produtoService.buscarProdutos)

fastify.get('/produto/:id', produtoService.buscarProdutoPorId)

fastify.post('/produto', produtoService.criarProdutos)

fastify.patch('/produto/id', produtoService.criarProdutos)

fastify.delete('/produto/id', produtoService.removerProduto)

fastify.listen({ port: PORT}, (err, address) => {
    if(err) {
        console.error('Erro ao subir o servdor', err)
        return;
    }
    console.log(`Server is now listening on ${address}`);
})
