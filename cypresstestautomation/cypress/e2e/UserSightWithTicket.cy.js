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

describe('Events erstellen', () => {
  it('passes', () =>{
    cy.visit('http://localhost:4200/admin/events')
    cy.get('#username').type('solvistas@ea.com')
    cy.get('#password').type('solvistas')
    cy.get('#btnLogin').click()
    cy.get('#createEvent').click()
    cy.get('#title').type('test1')
    cy.get('#personalisationRequired').click()
    cy.get('#edit-active').click()
    cy.get('label').contains('Öffentlich verfügbar').click();
    cy.get('#save-active').click()
    cy.get('#ticketDesign').select('Singmit 2022')
    cy.get('#stadiumConfigId').select('Heimstadion')
    cy.wait(2000)
    cy.get('input').eq(22).click()
    cy.get('button').contains('Speichern').click()
    cy.get('a').contains('Kategorien').click()
    cy.get('button').contains('Kategorien der Vorlage übernehmen').click()
    cy.get('button').contains('Speichern').click()
    cy.get('#action-bar').children().children().eq(1).click()
    cy.get('button').contains('Tickets jetzt erstellen').click()
    cy.get('button').contains('Speichern').click()
    cy.visit('http://localhost:4200/admin/events')
    //lösen mit for zum aktualisieren
    cy.wait(120000)
    cy.get('#test1').click()
    cy.wait(1000)
    cy.get('span').contains('Zurück').click()
    cy.wait(200)
    cy.get('#test1').children().children().eq(0).contains('Ja')
  })
})

//Issue: man soll schauen, ob des beim Verkauf verfügbar ist,
// jedoch braucht das Generieren der Tickets viel Zeit (unbekannt wie lang)
// und es ist nicht klar wie oft man auf Tickets generieren drücken muss.

// Selbst wenn man öfter auf Tickets generieren drückt, kann es sein, dass diese nicht
// generiert werden.