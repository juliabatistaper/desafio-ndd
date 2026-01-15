Feature: Pagina de Usuários

@filtro_busca
Scenario: Filtro de busca com sucesso
    Given que eu estou na página de Usuarios
    When clico no filtro de busca
    And eu digito um nome
    And pressiono Enter
    Then o sistema exibe os usuários filtrados
