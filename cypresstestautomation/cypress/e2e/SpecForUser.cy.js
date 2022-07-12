describe('Als User registrieren', () => {
    it('passes', () => {
        cy.visit('http://localhost:4200/register')
        cy.get('#firstname').type('Vorname')
        cy.get('#lastname').type('Nachname')
        cy.get('#email').type('test@gmail.com')
        cy.get('#confirmEmail').type('test@gmail.com')
        cy.get('#phone').type('123456789')
        cy.get('#birthdateinput').type('01.01.2001')
            .type('{enter}')
        cy.get('#street').type('test')
        cy.get('#zipCode').type('1111')
        cy.get('#city').type('city')
        cy.get('#password').type('test1234!')
        cy.get('#country').select('Österreich')
        cy.get('#agb').check({force: true})
        cy.get('#register-button').click()
    })
})

describe('Als User einloggen', () => {
    it('passes', () => {
        cy.visit('http://localhost:4200/login')
        cy.get('#username').type('test@gmail.com')
        cy.get('#password').type('test1234!')
        cy.get('#btnLogin').click()
    })
})

describe('Ticket kaufen / Warenkorb testen', () => {
    it('passes', () => {
        cy.visit('http://localhost:4200/login')
        cy.get('#username').type('test@gmail.com')
        cy.get('#password').type('test1234!')
        cy.get('#btnLogin').click()
        cy.visit('http://localhost:4200/events')
        cy.get('#toDetailsWrapper').find("button").click()
        cy.wait(500)
        cy.get('button').contains('Schnellauswahl')
        cy.wait(1000)
        cy.get('app-number-picker').children().children().eq(5).click() //scraltach
        cy.wait(200)
        cy.get('#ticketPrice').select(0)
        //cy.get('div').contains('Reihe 1').click()    gak
        //cy.get('div').contains('Sitz 2').click()      gak
        cy.get('button').contains('Stadionplan').click()
        cy.wait(2000)
        cy.get('canvas').then($canvas => {
            const canvasWidth = $canvas.width();
            const canvasHeight = $canvas.height();

            let canvasCenterX = canvasWidth / 5;
            let canvasCenterY = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .wait(500)
                .click(canvasCenterX, canvasCenterY)

        })
        cy.get('#reserveTicketsBtn').click()
        cy.get('button.btn.btn-danger').eq(1).click()
        cy.get('#checkoutFrameNext').click() //-"-
        cy.get('#username').type('test@gmail.com')
        cy.get('#password').type('test1234!')
        cy.get('#btnLogin').click()
        cy.get('#checkoutFrameNext').click()
        cy.wait(300)
        cy.get('#checkoutFrameNext').click()
        cy.wait(300)
        cy.get('#checkoutFrameNext').click()
        /*cy.get('#firstName').type('test')
        cy.get('#lastName').type('test')
        cy.get('#tac').click({force:true})
        cy.wait(200)
        cy.get('#eMail').type('test@gmail.com')     wird bei gratis tickets nicht gebraucht       extra checkout frame oben nur bei gratis tickets
        cy.get('#checkoutFrameNext').click()
        cy.get('#checkoutFrameNext').click()*/
    })
})
//Issue: Test verlangt eine Bezahlung mit Kreditkarte, dort wird man auf eine neue Seite geleitet,
//worauf Cypress nicht funktioniert....., ausgenommen freikarten

describe('Test Voucher Codes', () => {
    it('passes', () =>{
        cy.visit('http://localhost:4200/login')
        cy.get('#username').type('test@gmail.com')
        cy.get('#password').type('test1234!')
        cy.get('#btnLogin').click()
        cy.visit('http://localhost:4200/events')
        cy.wait(500)
        cy.get('button').last().click()
        cy.wait(500)
        cy.get('button').contains('Schnellauswahl')
        cy.wait(1000)
        cy.get('app-number-picker').children().children().eq(5).click() //scraltach
        cy.wait(200)
        cy.get('#ticketPrice').select(1)
        cy.get('#reserveTicketsBtn').click()
        cy.get('#checkoutFrameNext').click() //-"-
        cy.get('#firstName').type('testV')
        cy.get('#lastName').type('testN')
        cy.get('#eMail').type('test@gmail.com')
        cy.get('span').contains('Ich akzeptiere die ').click()
        cy.get('span').contains('Aktionscode hinzufügen').click()
        cy.get('div').find('input').last().type('vouchweihnachtenTK')
        cy.get('button').contains('Einlösen').click()
        cy.get('div').contains('-1,00 EUR')
        cy.get('#checkoutFrameNext').click()
        //wir haben das letzte Event genommen, da dies das einzige war, welches keine Freikarten hatte
        //um den Test auszuführen, müsste man ein Event erstellen, in welchem es keine Freikarten gibt
    })
})
