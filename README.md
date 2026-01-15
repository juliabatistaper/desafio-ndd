## Desafio NDD - Cypress + Gherkin/Cucumber

Estrutura inicial para usar Cypress com Gherkin/Cucumber (cypress + @badeball/cypress-cucumber-preprocessor).

Passos rápidos

1) Instalar dependências:

```powershell
npm install
```

2) Preparar o preprocessor (gera artefatos necessários antes de abrir o Cypress):

```powershell
npm run prepare
```

3) Abrir a interface do Cypress:

```powershell
npm run cypress:open
```

4) Executar os testes em modo headless:

```powershell
npm run cypress:run
```

A feature de exemplo está em `cypress/features/example.feature` e os step definitions em `cypress/e2e/steps/example.steps.js`.

Observações

- Assumi que você usará npm no Windows PowerShell; adapte para yarn se preferir.
- Se quiser, posso rodar um `npm install` para validar localmente (precisa de rede). Se quiser que eu faça, diga para eu executar os comandos.
