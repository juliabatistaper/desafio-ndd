Feature: Lista de Tarefas

Scenario: Excluir Tarefa
    Given que eu estou na página de Tarefas
    When eu seleciono uma tarefa existente
    And clico no botão Excluir
    And clico em confirmar
    Then a tarefa é removida da listagem 
    And deve exibir uma mensagem informando o sucesso na exclusão da Tarefa
