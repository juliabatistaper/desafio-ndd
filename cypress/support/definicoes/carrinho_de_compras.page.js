class CarrinhoDeCompras {
    contadorInicial = null;

    get itensLista() { return '.cart-item'; } 
    get contadorSeletor() { return '#contador-carrinho'; } 

    visitar() {
        cy.visit('/carrinho');
        return this;
    }

    selecionarProduto(produto) {
        cy.get(this.contadorSeletor)
          .invoke('text')
          .should((texto) => {
              this.contadorInicial = parseInt(texto);
          });
        
        cy.get(this.itensLista).contains(produto).click();
        return this;
    }

    removerProduto() {
        cy.get(this.itensLista).find('.remove-button').click();
        return this;
    }

    validarProdutoNaoVisivel(produto) {
        cy.get(this.itensLista).contains(produto).should('not.exist');
        return this;
    }

    validarSubtotal() {
        cy.get(this.contadorSeletor)
          .invoke('text')
          .should((texto) => {
              const contadorAtual = parseInt(texto);
              expect(this.contadorInicial).to.equal(contadorAtual + 1);
          });
        return this;
    }
}

export default new CarrinhoDeCompras();