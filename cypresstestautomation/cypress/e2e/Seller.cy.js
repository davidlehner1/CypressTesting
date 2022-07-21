describe('Verkauf/Bezahlarten', function () {
  it('passes', function () {
    cy.visit('localhost:4200/sale')
    cy.get('#username').type('solvistas@ea.com')
    cy.get('#password').type('solvistas')
    cy.get('#btnLogin').click()
    cy.get('tbody').children().last().click()
    cy.get('button').contains('+').click()
    cy.wait(1000)
    cy.get('span').contains('Personalisieren').click()
    cy.get('[role=combobox]').eq(1).type('solvistas')
    cy.get('div').contains('Admin Admin').click()
    cy.get('#save-active').click()
    cy.wait(500)
    cy.get('button').contains('Bankomat').click()
    cy.get('#btnBuyTickets').click()
    cy.visit('localhost:4200/sale')
    cy.get('tbody').children().last().click()
    cy.get('button').contains('+').click()
    cy.wait(1000)
    cy.get('span').contains('Personalisieren').click()
    cy.get('[role=combobox]').eq(1).type('solvistas')
    cy.get('div').contains('Admin Admin').click()
    cy.get('#save-active').click()
    cy.get('#btnBuyTickets').click()
    cy.visit('localhost:4200/admin/allorders')
    cy.get('tbody').children().eq(0).click()
    cy.wait(500)
    cy.get('span').contains('Bestellung stornieren').click()
    cy.get('#dialogDeleteBtn').click()
    cy.visit('localhost:4200/admin/allorders')
    cy.get('tbody').children().eq(0).contains('Storniert')
  });
});

describe('Reservierungen', function () {
  it('passes', function () {
    cy.visit('http://localhost:4200/admin/admin-ticket-reservation-overview')
    cy.get('#username').type('solvistas@ea.com')
    cy.get('#password').type('solvistas')
    cy.get('#btnLogin').click()
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
    cy.get('select').eq(0).select('testWithoutFree (13.07.2023)') //muss wahrscheinlich täglich geändert werden
    //funktioniert nur wenn test without free 1 mal da ist
    cy.get('td').contains('testing')
  });
});

