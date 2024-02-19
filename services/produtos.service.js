import { produtos } from "../db/produtos.js"

export const produtoService = {
    
    buscarProdutos: (req, res)=> {
        return produtos;
    },
    
    buscarProdutoPorId: (req, res) => {
        let idReq = req.parms.id;
        return produtos.find(p => p.id === parseInt(idReq));
    },

    criarProdutos: (req, res) => {
        const produto = req.body;
        return produtos.push(produto);
    },

    atualizarProduto: (req, res) => {

    },

    removerProduto: (req, res) => {

    },

}

