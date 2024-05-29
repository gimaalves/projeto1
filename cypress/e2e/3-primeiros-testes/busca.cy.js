/// <reference types="cypress" />

//busca as palavras 'Automação de teste' em https://www.google.com 
//clica em pesquisar e valida se aparece resultado contendo as palavras da pesquisa
describe('Busca no google', () => {
    it('Deve buscar com sucesso palavras-chave', () => {
        cy.visit('https://www.google.com')
        cy.get('#APjFqb').type('Automação de testes')
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()

        cy.get('.DoxwDb > .PZPZlf', {timeout: 10000}).should('contain', 'Automação de teste')
    });
});