describe('DK auswählen und kaufen', ()=>{
    it('passes', ()=>{
        login('test@gmail.com', 'test1234!')
        cy.visit('http://localhost:4200/season-tickets')
        cy.get('button').contains('Jetzt Tickets buchen').first().click()
        cy.wait(2000)
        canvasClick(2, 5)
        //wir können den Test nicht weiterführen, da man auf eine andere Website
        //geleitet wird, wo man mit Kreditkarte bezahlen muss. Das wird von Cypress
        //nicht unterstützt. Zumindest beendet es sich, sobald eine neue
        //Seite geöffnet wird.
    })
})