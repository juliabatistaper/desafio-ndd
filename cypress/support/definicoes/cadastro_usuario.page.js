class CadastroUsuarioPage {
    get campoNome() { return cy.get('input[id*="#nome"]'); }
    get campoEmail() { return cy.get('input[id*="#email"]'); }
    get campoSenha() { return cy.get('input[id*="#senha"]'); }
    get botaoCadastrar() { return cy.get('button').contains('Cadastrar'); }
    get mensagemSucesso() { return cy.contains(/Um link de recuperação foi enviado para seu e-mail./i); }
    get mensagemErro() { return cy.contains(/erro|inválido|não encontrado/i); }

    visitar() {
        cy.visit('/cadastro');
        return this;
    }

    preencherNome(nome) {
        this.campoNome.clear().type(nome);
        return this;
    }
    preencherEmail(email) {
        this.campoEmail.clear().type(email);
        return this;
    }
    preencherSenha(senha) {
        this.campoSenha.clear().type(senha);
        return this;
    }

    // preenche todos os dados de uma vez com um objeto
    preencherDados({ nome, email, senha } = {}) {
        if (nome !== undefined) this.preencherNome(nome);
        if (email !== undefined) this.preencherEmail(email);
        if (senha !== undefined) this.preencherSenha(senha);
        return this;
    }

    cadastrar() {
        this.botaoCadastrar.click();
        return this;
    }

    verificarSucesso(mensagemEsperada) {
        if (mensagemEsperada) {
            this.mensagemSucesso.should('be.visible').and('contain', mensagemEsperada);
        } else {
            this.mensagemSucesso.should('be.visible');
        }
        return this;
    }

    verificarErro() {
        this.mensagemErro.should('be.visible');
        return this;
    }

}

export default new CadastroUsuarioPage();