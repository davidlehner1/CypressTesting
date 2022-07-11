describe('öffnet Verkaufsplan', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/sale')
    cy.get('#username').type('solvistas@ea.com')
    cy.get('#password').type('solvistas')
    cy.get('#btnLogin').click()
  })
})

describe('öffnet den Saalplan', () => {
  it('passes' ,() => {
    cy.visit('http://localhost:4200/sale')
    cy.get('#username').type('solvistas@ea.com')
    cy.get('#password').type('solvistas')
    cy.get('#btnLogin').click()
    cy.get("#eventTable").click(30, 100)
    cy.get('#stadiumPlanTab').click()
  })
})


describe('belegt sitze', () => {
    it('passes', () => {
        cy.visit('http://localhost:4200/sale')
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
        cy.get("app-sales-shopping-cart-card").find('button').click({force:true, multiple: true})
        cy.wait(500)
        cy.get("app-sales-shopping-cart-card").find('button').click({force:true, multiple: true})
        cy.wait(5000)
    })
})

describe('Personalisiert Tickets mit vorgefertigter Person', () =>{
    it('passes', () => {
        cy.visit('http://localhost:4200/sale')
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