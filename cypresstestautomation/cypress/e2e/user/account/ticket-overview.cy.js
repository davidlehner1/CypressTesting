import {login} from "../../../support/shared";

describe('Lade gekauftes Ticket herunter', () => {
    it('passes', () => {
        cy.visit('localhost:4200/my-account')
        login('test@gmail.com', 'test1234!')
        cy.get('app-event-item-group').should('have.length', 1)
        cy.get('fa-icon').should('have.class', 'ng-fa-icon px-2').eq(13).click()
    })
})
