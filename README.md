# AquiEmCasa

O **AquiEmCasa** é uma aplicação web para gerir as despesas de uma casa partilhada. O objetivo é que os moradores consigam perceber quem pagou cada conta, quanto cabe a cada pessoa e que pagamentos faltam para acertar os saldos.

Por exemplo, se um morador pagar uma fatura de eletricidade de 60 € dividida igualmente entre três pessoas, a aplicação deverá mostrar que cada pessoa suporta 20 € e que o morador que adiantou o dinheiro tem 40 € a receber.

Este é um projeto pessoal de portfólio, desenvolvido por sprints, desde a interface em React até à integração com uma API e uma base de dados.

## Estado atual

**Sprint 1 — Configuração, identidade visual e navegação responsiva.**

A primeira versão já inclui a estrutura em React e TypeScript, um tema escuro com destaque âmbar (`#F2A65A`) e navegação adaptada a computador e telemóvel. As cinco áreas estão representadas por secções na mesma página. As rotas individuais, o registo de despesas e o cálculo de saldos fazem parte das próximas etapas.

## Áreas da aplicação

| Área | Funcionalidade prevista |
| --- | --- |
| **Visão geral** | Consultar um resumo das despesas da casa e dos acertos pendentes. |
| **Despesas** | Registar o valor de cada despesa, quem pagou e entre quem deve ser dividida. |
| **Acertos** | Consultar quanto cada morador tem a pagar ou a receber e registar os pagamentos entre moradores. |
| **Moradores** | Gerir a lista de pessoas que fazem parte da casa. |
| **Definições** | Editar os dados e as preferências da casa. |

## Como será desenvolvido

O desenvolvimento segue o ciclo **compreender → implementar → testar**. Cada sprint acrescenta uma parte da aplicação que pode ser experimentada antes de avançar para a seguinte.

1. **Interface e navegação.** A base utiliza React, TypeScript, Vite e Tailwind CSS. O próximo passo é dar um endereço próprio a cada página, como `/despesas`, mantendo o menu responsivo.
2. **Gestão da casa.** Com as páginas criadas, serão implementados os formulários de moradores e despesas, a divisão dos valores e o cálculo dos saldos. Os primeiros testes usarão dados de exemplo para verificar situações concretas, como a fatura dividida entre três moradores.
3. **API e persistência.** Uma API em Node.js e Express ligará a interface ao MongoDB, onde serão guardados os moradores, as despesas e os acertos.

O desenvolvimento decorre na branch `dev`. As versões estáveis são integradas na `main`.

## Executar localmente

Com Node.js e npm instalados, executa os seguintes comandos:

```bash
git clone https://github.com/santiiago90/AquiEmCasa.git
cd AquiEmCasa
npm install
npm run dev
```

Abre o endereço indicado pelo Vite no terminal. A versão atual funciona apenas com o frontend; a API e o MongoDB serão introduzidos numa fase posterior.

| Comando | Função |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run lint` | Analisa o código com ESLint. |
| `npm run build` | Verifica o TypeScript e gera a versão de produção em `dist/`. |
| `npm run preview` | Permite testar localmente a versão gerada pelo build. |

## Autor

Desenvolvido por **Santiago Fernandes**, estudante de Informática Web, Móvel e na Nuvem na Universidade da Beira Interior.

[Portfólio](https://santiagofernandes.dev) · [GitHub](https://github.com/santiiago90)
