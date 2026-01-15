const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

import CadastroUsuarioPage from '../support/definicoes/cadastro_usuario.page.js';

Given('que eu estou na página de Cadastro', () => {
    CadastroUsuarioPage.visitar();
});

When('eu insiro os valores de Nome, Email e Senha', () => {
    CadastroUsuarioPage.preencherDados({ 
        nome: 'Usuário Exemplo', 
        email: 'usuario@example.com', 
        senha: 'Senha123!' });
});

When('eu insiro os valores de Nome, Email e Senha inválidos', () => {
  CadastroUsuarioPage.preencherDados({ 
        nome: 'Usuário Exemplo', 
        email: 'usuario.com', 
        senha: 'Senha123!' });
});

When('eu clico no botão cadastrar', () => {
    CadastroUsuarioPage.cadastrar();
});

Then('o sistema deve exibir a mensagem Cadastro realizado com sucesso.', () => {
  CadastroUsuarioPage.verificarSucesso("Cadastro realizado com sucesso.");
});

Then('o sistema deve exibir uma mensagem de erro', () => {
  CadastroUsuarioPage.verificarErro();
});
