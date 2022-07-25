import {login} from "../../../support/shared";

describe('change informations', () => {
    it('passes', () => {
        cy.visit('localhost:4200/my-account')
        login('test@gmail.com', 'test1234!')
        cy.wait(1000)
        cy.get('ul.list-unstyled').children().eq(5).click()
        cy.get('#firstname').clear()
        cy.get('#firstname').type('testV')
        cy.get('#lastname').clear()
        cy.get('#lastname').type('testN')
        cy.get('#save').click()
    })
})
