import {login} from "../../../support/shared";

describe('Reservierungen', function () {
    it('passes', function () {
        cy.visit('http://localhost:4200/admin/admin-ticket-reservation-overview')
        login('solvistas@ea.com', 'solvistas')
        cy.wait(1000)
        cy.get('tbody').children().last().find('button').click()
        cy.wait(2000)
        cy.get('button.btn-primary').eq(1).click()
        cy.wait(500)
        cy.get('app-single-ticket-selection-sector-rows').children().eq(0).click()
        cy.get('app-single-ticket-selection-list').children().children().children()
            .eq(1).find('app-ea-checkbox').click()
        cy.get('button.btn-primary').eq(0).click()
        cy.wait(200)
        cy.get('#description').type('testing')
        cy.get('#save-active').click()
        cy.visit('http://localhost:4200/admin/admin-ticket-reservation-overview')
        cy.wait(1000)
        cy.get('a').contains('Bestehende Reservierungen').click()
        cy.get('select').eq(0).select('testWithoutFree (13.07.2023)')
        //funktioniert nur wenn test without free 1 mal da ist. d.h. er funktioniert nur 1 mal
        cy.get('td').contains('testing').click()
        cy.get('button').contains('Löschen').click()
        cy.wait(300)
        cy.get('button').contains('Ticketreservierung löschen').click()

    });
});

