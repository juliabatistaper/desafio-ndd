class RecuperacaoSenhaPage {
    get link_esqueci_minha_senha() { return cy.contains(/Esqueci minha senha/i).click(); }
    get url_recuperacao() { return cy.url(); }
    get campoEmail() { return cy.get('input[id*="email-recuperacao"]'); }
    get botao_recuperar() { return cy.get('button').contains('Recuperar'); }
    get mensagemSucesso() { return cy.contains("Um link de recuperação foi enviado para seu e-mail."); }
    get mensagemErro() { return cy.contains(/erro|inválido|não encontrado|não existe/i); }

    visitar() {
        cy.visit('/recuperar-senha');
        return this;
    }

    linkEsqueciMinhaSenha() {
        this.link_esqueci_minha_senha.click();
        return this;
    }

    urlRecuperacao() {
        this.url_recuperacao.should('include', '/recuperar-senha');
        return this;
    }

    digitarEmail(email) {
        this.campoEmail().clear().type(email);
        return this;
    }

    botaoRecuperar() {
        return this.botao_recuperar;
    }

    validarMensagemSucesso() {
        this.mensagemSucesso().should('be.visible');
        return this;
    }

    validarMensagemErro() {
        this.mensagemErro().should('be.visible');
        return this;
    }

}

export default new RecuperacaoSenhaPage();