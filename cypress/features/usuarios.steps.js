const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

import UsuariosPage from '../support/definicoes/usuarios.page.js';

Given('que eu estou na página de Usuarios', () => {
    UsuariosPage.visitar();
});

When('clico no filtro de busca', () => {
    UsuariosPage.campoPesquisa().click();
});

When('eu digito um nome', () => {
    const nome = 'João';
    UsuariosPage.digitarPesquisa(nome);
});

When('pressiono Enter', () => {
    UsuariosPage.campoPesquisa().type('{enter}');
});

Then('o sistema exibe os usuários filtrados', () => {
    UsuariosPage.validarItensFiltrados('João');
});
