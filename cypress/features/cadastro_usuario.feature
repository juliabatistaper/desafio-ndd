Feature: Cadastro de usuarios

Scenario: Cadastro com sucesso
    Given que eu estou na página de Cadastro
    When eu insiro os valores de Nome, Email e Senha
    And eu clico no botão cadastrar
    Then o sistema deve exibir a mensagem Cadastro realizado com sucesso.

Scenario: Cadastro sem sucesso
    Given que eu estou na página de Cadastro
    When eu insiro os valores de Nome, Email e Senha inválidos
    And eu clico no botão cadastrar
    Then o sistema deve exibir uma mensagem de erro

