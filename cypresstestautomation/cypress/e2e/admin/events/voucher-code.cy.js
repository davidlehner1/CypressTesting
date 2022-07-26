import {login} from "../../../support/shared";

describe('VoucherCode an AK', ()=>{
    it('passes', ()=>{
        cy.visit('http://localhost:4200/sale')
        login('solvistas@ea.com', 'solvistas')
        cy.get('td').contains('testWithoutFree').click()
        cy.wait(2000)
        cy.get('button').contains('+').eq(0).click()
        cy.wait(1000)
        cy.get('a').contains('Aktionscode einlösen').click()
        cy.get('input[name="code"]').type('vouchweihnachtenpers').type('{enter}')
        cy.get('div').contains('-1,00 EUR')
    })
})