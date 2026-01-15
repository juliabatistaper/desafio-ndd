Feature: Carrinho de compras

Scenario: Remover produto do carrinho
  Given que estou na página do Carrinho
  And tenho um produto "Camiseta Azul" no carrinho
  When clico no botão Remover deste produto
  Then o produto "Camiseta Azul" não deve mais aparecer no carrinho
  And o contador do carrinho deve ser atualizado