describe('Lade gekauftes Ticket herunter', () => {
    it('passes', () => {
        cy.visit('https://d1m00rumkhsqr2.cloudfront.net/my-account')
        cy.get('#username').type('test@gmail.com')
        cy.get('#password').type('test1234!')
        cy.get('#btnLogin').click()
        cy.get('app-event-item-group').should('have.length', 1)
        cy.get('fa-icon').should('have.class', 'ng-fa-icon px-2').eq(13).click()
    })
})

describe('change informations', () => {
    it('passes', () => {
        cy.visit('https://d1m00rumkhsqr2.cloudfront.net/my-account')
        cy.get('#username').type('test@gmail.com')
        cy.get('#password').type('test1234!')
        cy.get('#btnLogin').click()
        cy.wait(1000)
        cy.get('ul.list-unstyled').children().eq(5).click()
        cy.get('#firstname').clear()
        cy.get('#firstname').type('testV')
        cy.get('#lastname').clear()
        cy.get('#lastname').type('testN')
        cy.get('#save').click()
    })
})