const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

import ListaDeTarefasPage from '../support/definicoes/lista_de_tarefas.page.js';

Given('que eu estou na página de Tarefas', () => {
    ListaDeTarefasPage.visitar();
});

When('eu seleciono uma tarefa existente', () => {
    ListaDeTarefasPage.selecionarPrimeiroItem();
});

When('clico no botão Excluir', () => {
    ListaDeTarefasPage.botaoExcluir().click();
});

When('clico em confirmar', () => {
    ListaDeTarefasPage.botaoConfirmar().click();
});

Then('a tarefa é removida da listagem', () => {
    ListaDeTarefasPage.validaExclusao();
});

Then('deve exibir uma mensagem informando o sucesso na exclusão da Tarefa', () => {
    ListaDeTarefasPage.mensagem_sucesso.should('be.visible');
});
