import {login} from "../../../support/shared";

// describe('Events erstellen', () => {
//     it('passes', () => {
//         cy.visit('localhost:4200/admin/events')
//         cy.wait(2000)
//         cy.get('#username').type('solvistas@ea.com')
//         cy.get('#password').type('solvistas')
//         cy.get('#btnLogin').click()
//         cy.get('#createEvent').click()
//         cy.get('#title').type('test')
//         cy.get('#personalisationRequired').click()
//         cy.get('#edit-active').click()
//         cy.get('label').contains('Öffentlich verfügbar').click();
//         cy.get('#save-active').click()
//         cy.get('#ticketDesign').select('Singmit 2022')
//         cy.get('#stadiumConfigId').select('Heimstadion')
//         cy.wait(2000)
//         cy.get('input').eq(22).click()
//         cy.get('button').contains('Speichern').click()
//         cy.get('a').contains('Kategorien').click()
//         cy.wait(500)
//         cy.get('button').contains('Kategorien der Vorlage übernehmen').click()
//         cy.wait(500)
//         cy.get('button').contains('Speichern').click()
//         cy.get('#action-bar').children().children().eq(1).click()
//         cy.get('button').contains('Tickets jetzt erstellen').click()
//         cy.get('button').contains('Speichern').click()
//         cy.visit('http://localhost:4200/admin/events')
//         cy.get('th').contains('Tickets generiert ').click()
//         for (let i = 0; i < 5; i++) {
//             cy.wait(60000)
//             cy.get('#test').click()
//             cy.wait(4000)
//             cy.get('span').contains('Zurück').click()
//             cy.wait(200)
//             let testChild = cy.get('#test').children().children().eq(0);
//             if(testChild.contains( 'Ja')){
//                 i = 5
//             }
//         }
//         /*cy.wait(120000)
//         cy.get('#test').click()
//         cy.wait(5000)
//         cy.get('span').contains('Zurück').click()
//         cy.wait(200)
//         cy.get('#test').children().children().eq(0).contains('Ja')*/
//         cy.visit('localhost:4200/sale')
//         cy.wait(1000)
//         cy.get('th').contains('Titel').click()
//         cy.wait(500)
//         cy.get('th').contains('Titel').click()
//         cy.get('tr').contains('test')
//     })
// })
//Issue: if in der for schlägt nicht an

// describe('Suchzeitraum', function () {
//     it('passes', () => {
//         cy.visit('localhost:4200/admin/events')
//         cy.wait(2000)
//         cy.get('#username').type('solvistas@ea.com')
//         cy.get('#password').type('solvistas')
//         cy.get('#btnLogin').click()
//         cy.get('#createEvent').click()
//         cy.get('#title').type('test')
//         cy.get('#personalisationRequired').click()
//         cy.get('#edit-active').click()
//         cy.get('label').contains('Öffentlich verfügbar').click();
//         cy.wait(200)
//         cy.get('input').eq(27).clear()
//         cy.get('input').eq(27).type('13.07.2021').type('{enter}')
//         cy.get('#save-active').should('be.disabled')
//     })
// })
//
// describe('Eventsichtbarkeit überprüfen', function () {
//     it('passes', function () {
//         cy.visit('localhost:4200/events')
//         cy.get('div').contains('test') // schlägt bei allem an was test im Namen hat
//     })
// });
//
// describe('Events erstellen mit extras', () => {
//     it('passes', function() {
//         cy.visit('localhost:4200/admin/events')
//         cy.wait(2000)
//         login('solvistas@ea.com', 'solvistas')
//         cy.get('#createEvent').click()
//         cy.get('#title').type('test')
//         cy.get('#personalisationRequired').click()
//         cy.get('#edit-active').click()
//         cy.get('label').contains('Öffentlich verfügbar').click();
//         cy.get('#save-active').click()
//         cy.get('#ticketDesign').select('Singmit 2022')
//         cy.get('#stadiumConfigId').select('Heimstadion')
//         cy.wait(2000)
//         cy.get('input').eq(22).click()
//         cy.get('button').contains('Speichern').click()
//         cy.get('a').contains('Kategorien').click()
//         cy.wait(500)
//         cy.get('button').contains('Kategorien der Vorlage übernehmen').click()
//         cy.wait(500)
//         cy.get('button').contains('Speichern').click()
//         cy.get('#action-bar').children().children().eq(1).click()
//         cy.get('button').contains('Tickets jetzt erstellen').click()
//         cy.get('button').contains('Speichern').click()
//         cy.get('a').contains('Erweiterte Einstellungen').click()
//         cy.get('input').eq(0).type('test')
//         cy.get('button').contains('Datei auswählen').click()
//         cy.wait(1000)
//         cy.get('input[type=file]').eq(1).selectFile('cypress/fixtures/test.jpg' ,{force:true})
//         cy.get('button').contains('Speichern').click()
//         cy.visit('http://localhost:4200/admin/events')
//         cy.get('th').contains('Tickets generiert ').click()
//         for (let i = 0; i < 5; i++) {
//             cy.wait(60000)
//             cy.get('#test').click()
//             cy.wait(4000)
//             cy.get('span').contains('Zurück').click()
//             cy.wait(200)
//             let testChild = cy.get('#test').children().children().eq(0);
//             if(testChild.contains( 'Ja')){
//                 i = 5
//             }
//         }
//     })
// })

describe('Ort erstellen', () =>{
    it('passes', () =>{
        cy.visit('http://localhost:4200/admin/admin-event-location-overview')
        login('solvistas@ea.com', 'solvistas')
        cy.get('button').should('contain', 'Ort hinzufügen').eq(1).click()
        cy.get('#name').type('test')
        cy.get('#street').type('test')
        cy.get('#zip').type(1111)
        cy.get('#city').type('test')
        cy.get('#timezone').select('Africa/Addis_Ababa')
        cy.get('button').contains('Speichern').click()
        cy.wait(500)
        cy.get('tr').contains('test').siblings().eq(4).click()
        cy.get('button').contains('Zurück').click()
    })
})