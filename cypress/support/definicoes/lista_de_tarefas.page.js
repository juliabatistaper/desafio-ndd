class ListaDeTarefasPage {
    get url_lista_tarefas() { return cy.url().should('include', '/tarefas'); }
    get item_lista_tarefas() { return cy.get('ul[id*="lista-tarefas"] li'); }
    get botao_excluir() { return cy.get('button').contains('Excluir'); }
    get botao_confirmar() { return cy.get('button').contains('Confirmar'); }
    get mensagem_sucesso() { return cy.contains('Tarefa excluída'); }
    get mensagem_erro() { return cy.contains(/erro|inválido|não encontrado/i); }

    visitar() {
        cy.visit('/tarefas');
        return this;
    }

    selecionarPrimeiroItem() {
        this.item = this.item_lista_tarefas.first();
        this.item.click();
        return this;
    }

    validaExclusao() {
        this.item.should('not.exist');  
        return this;
    }

}

export default new ListaDeTarefasPage();