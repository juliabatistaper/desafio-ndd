Feature: Recuperação de senha

   Scenario: Recuperação de senha com email válido
    Given que eu acesso a página de login
    When eu clico no link "Esqueci minha senha"
    And eu sou redirecionado para a pagina recuperar-senha
    And eu informo um email válido para recuperação de senha
    And clico em recuperar
    Then o sistema deve exibir a mensagem de sucesso

  Scenario: Recuperação de senha com email inválido
    Given que eu acesso a página de login
    When eu clico no link Esqueci minha senha
    And eu sou redirecionado para a pagina recuperar-senha
    And eu informo um email inválido para recuperação de senha
    And clico em recuperar
    Then uma mensagem de erro deve ser apresentada em tela
