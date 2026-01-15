const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

import RecuperacaoSenhaPage from '../support/definicoes/recuperacao_senha.page.js';

Given('que eu acesso a página de login', () => {
  RecuperacaoSenhaPage.visitar();
});

When('eu clico no link "Esqueci minha senha"', () => {
  RecuperacaoSenhaPage.linkEsqueciMinhaSenha();
});

When('eu sou redirecionado para a pagina recuperar-senha', () => {
  RecuperacaoSenhaPage.urlRecuperacao();
});

When('eu informo um email válido para recuperação de senha', () => {
  RecuperacaoSenhaPage.digitarEmail('usuario@example.com');
});

When('eu informo um email inválido para recuperação de senha', () => {
  RecuperacaoSenhaPage.digitarEmail('email-invalido');
});

When('clico em recuperar', () => {
  RecuperacaoSenhaPage.botaoRecuperar().click();
});

Then('o sistema deve exibir a mensagem de sucesso', () => {
  RecuperacaoSenhaPage.validarMensagemSucesso();
});

Then('uma mensagem de erro deve ser apresentada em tela', () => {
  RecuperacaoSenhaPage.validarMensagemErro();
});
