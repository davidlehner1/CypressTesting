describe('öffnet Verkaufsplan', () => {
    it('passes', () => {
        cy.visit('localhost:4200/sale')
        cy.wait(2000)
        cy.get('#username').type('solvistas@ea.com')
        cy.get('#password').type('solvistas')
        cy.get('#btnLogin').click()
    })
})

describe('öffnet den Saalplan', () => {
    it('passes', () => {
        cy.visit('localhost:4200/sale')
        cy.wait(2000)
        cy.get('#username').type('solvistas@ea.com')
        cy.get('#password').type('solvistas')
        cy.get('#btnLogin').click()
        cy.get("#eventTable").click(30, 100)
        cy.get('#stadiumPlanTab').click()
    })
})


describe('belegt sitze', () => {
    it('passes', () => {
        cy.visit('localhost:4200/sale')
        cy.wait(2000)
        cy.get('#username').type('solvistas@ea.com')
        cy.get('#password').type('solvistas')
        cy.get('#btnLogin').click()
        cy.get("#eventTable").click(30, 100)
        cy.get('#stadiumPlanTab').click()
        cy.wait(2000)
        cy.get('a').contains('+').click();
        cy.get('canvas').then($canvas => {
            const canvasWidth = $canvas.width();
            const canvasHeight = $canvas.height();

            let canvasCenterX = canvasWidth / 10;
            let canvasCenterY = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .wait(500)
                .click(canvasCenterX, canvasCenterY)
            //warum kann der rest nicht belegt werden?
        })
        cy.get('#ticketSelectionTab').click()
        cy.get('app-number-picker').children().children().eq(2).click() //scra
        cy.wait(200)
        /*cy.get('tr').children().children().eq(7).click()
        cy.get('div').contains('Reihe 1').scrollIntoView().click()           gak
        cy.get('div').contains('Sitz 2').scrollIntoView().click()*/
        cy.scrollTo("top")
        cy.wait(300)
        cy.get("span").contains("2 Tickets")
        cy.wait(5000)
        cy.get("app-sales-shopping-cart-card").find('button').click({force: true, multiple: true})
        cy.wait(500)
        cy.get("app-sales-shopping-cart-card").find('button').click({force: true, multiple: true})
        cy.wait(5000)
    })
})

describe('Events erstellen', () => {
    it('passes', () => {
        cy.visit('localhost:4200/admin/events')
        cy.wait(2000)
        cy.get('#username').type('solvistas@ea.com')
        cy.get('#password').type('solvistas')
        cy.get('#btnLogin').click()
        cy.get('#createEvent').click()
        cy.get('#title').type('test')
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
        cy.wait(500)
        cy.get('button').contains('Kategorien der Vorlage übernehmen').click()
        cy.wait(500)
        cy.get('button').contains('Speichern').click()
        cy.get('#action-bar').children().children().eq(1).click()
        cy.get('button').contains('Tickets jetzt erstellen').click()
        cy.get('button').contains('Speichern').click()
        cy.visit('http://localhost:4200/admin/events')
        //lösen mit for zum aktualisieren
        cy.get('th').contains('Tickets generiert ').click()
        /*for (let i = 0; i < 5; i++) {
            cy.wait(60000)
            cy.get('#test1').click()
            cy.wait(1000)
            cy.get('span').contains('Zurück').click()
            cy.wait(200)
            cy.get('#test1').then(($span) => {
                if ($span.children().children().eq(0).text().includes('Ja')) {
                    i = 5;
                }
            })
        }*/
        cy.wait(120000)
        cy.get('#test').click()
        cy.wait(5000)
        cy.get('span').contains('Zurück').click()
        cy.wait(200)
        cy.get('#test').children().children().eq(0).contains('Ja')
        cy.visit('localhost:4200/sale')
        cy.wait(1000)
        cy.get('th').contains('Titel').click()
        cy.wait(500)
        cy.get('th').contains('Titel').click()
        cy.get('tr').contains('test')
    })
})
//Issue: if in der for schlägt nicht an


describe('Personalisiert Tickets mit vorgefertigter Person', () => {
    it('passes', () => {
        cy.visit('localhost:4200/sale')
        cy.wait(2000)
        cy.get('#username').type('solvistas@ea.com')
        cy.get('#password').type('solvistas')
        cy.get('#btnLogin').click()
        cy.get("#eventTable").click(30, 100)
        cy.get('#stadiumPlanTab').click()
        cy.wait(2000)
        cy.get('a').contains('+').click();
        cy.get('canvas').then($canvas => {
            const canvasWidth = $canvas.width();
            const canvasHeight = $canvas.height();

            let canvasCenterX = canvasWidth / 10;
            let canvasCenterY = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .wait(500)
                .click(canvasCenterX, canvasCenterY)

        })
        cy.get('#ticketSelectionTab').click()
        cy.get('app-number-picker').children().children().eq(2).click() //scra
        cy.wait(200)
        /*cy.get('tr').children().children().eq(7).click()
        cy.get('div').contains('Reihe 1').scrollIntoView().click()           gak
        cy.get('div').contains('Sitz 2').scrollIntoView().click()*/
        cy.scrollTo("top")
        cy.wait(300)
        cy.get("span").contains("2 Tickets")
        cy.wait(1000)
        cy.get('span').contains('Personalisieren').click()
        cy.get('[role=combobox]').eq(1).type('solvistas')
        cy.get('div').contains('Admin Admin').click()
        cy.get('#save-active').click()
        cy.get('a:contains("Person für alle Tickets übernehmen")').first().click()
        cy.get('#btnBuyTickets').click()
    })
})

//Test funktioniert nur einmal, da die Plätze statisch gewählt werden
//an sich funktioniert der Test

//Problem mit sitzen es wird nicht das ganze Stadion belegt

describe('Suchzeitraum', function () {
    it('passes', () => {
        cy.visit('localhost:4200/admin/events')
        cy.wait(2000)
        cy.get('#username').type('solvistas@ea.com')
        cy.get('#password').type('solvistas')
        cy.get('#btnLogin').click()
        cy.get('#createEvent').click()
        cy.get('#title').type('test')
        cy.get('#personalisationRequired').click()
        cy.get('#edit-active').click()
        cy.get('label').contains('Öffentlich verfügbar').click();
        cy.wait(200)
        cy.get('input').eq(27).clear()
        cy.get('input').eq(27).type('13.07.2021').type('{enter}')
        cy.get('#save-active').should('be.disabled')
    })
})

describe('Eventsichtbarkeit überprüfen', function () {
    it('passes', function () {
        cy.visit('localhost:4200/events')
        cy.get('div').contains('test') // schlägt bei allem an was test im Namen hat
    })
});