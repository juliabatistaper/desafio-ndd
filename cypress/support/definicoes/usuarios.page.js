class UsuariosPage {
    get campoPesquisa() { return cy.get('input[id*="filtro-nome"]'); }
    get url() { return cy.url().should('include', '/usuarios'); }
    get itensLista() { return cy.get('ul[id*="lista-usuarios"] li'); }

    visitar() {
        cy.visit('/usuarios');
        return this;
    }

    digitarPesquisa(texto) {
        this.campoPesquisa().clear().type(texto);
        return this;
    }

    validarItensFiltrados(nome) {
        this.itensLista().each(($el) => {
            cy.wrap($el).should('contain.text', nome);
        });
        return this;
    }

}

export default new UsuariosPage();
