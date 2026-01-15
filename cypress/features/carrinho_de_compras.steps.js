const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

import CarrinhoDeCompras from '../support/definicoes/carrinho_de_compras.page.js';

Given('que estou na página do Carrinho', () => {
  CarrinhoDeCompras.visitar();
});

Given('tenho um produto {string} no carrinho', (produto) => {
  CarrinhoDeCompras.selecionarProduto(produto);
});

When('clico no botão Remover deste produto', () => {
  CarrinhoDeCompras.removerProduto();
});

Then('o produto {string} não deve mais aparecer no carrinho', (produto) => {
  CarrinhoDeCompras.validarProdutoNaoVisivel(produto);
});

Then('o subtotal do carrinho deve ser atualizado', () => {
  CarrinhoDeCompras.validarSubtotal();
});
