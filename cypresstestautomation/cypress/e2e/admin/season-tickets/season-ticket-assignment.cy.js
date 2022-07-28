describe('empty spec', () => {
    it('passes', () => {
        cy.visit('http://localhost:4200/admin/admin-season-ticket-overview')
        cy.get('#username').type('solvistas@ea.com')
        cy.get('#password').type('solvistas')
        cy.get('#btnLogin').click()

        cy.get('td').contains('210gprfs').click()
        cy.visit('http://localhost:4200/admin/admin-season-ticket-overview')

        cy.get('#season-ticket-filter').type('qwer')
        cy.wait(4000)
        cy.get('td').contains('2201tnki').click()


        cy.visit('http://localhost:4200/admin/admin-season-ticket-assignment')
        cy.wait(7000)

        cy.get('canvas').then($canvas => {
            const canvasWidth = $canvas.width();
            const canvasHeight = $canvas.height();

            let canvasCenterX = canvasWidth / 6;
            let canvasCenterY = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .wait(500)
                .click(canvasCenterX, canvasCenterY)
        })
        cy.wait(3000)
        cy.get('input').eq(0).type('qwer qwer')
        cy.wait(400)

        cy.get('fa-icon').eq(1).click()

        cy.get('label').eq(2).click()

        cy.get('#firstname').type('testtest')
        cy.get('#lastName').type('t3st')
        cy.get('#phoneNr').type('0414151')
        cy.get('#birthdate').type('22.04.20ß4').type('{enter}')
        cy.get('#email').type('vamos@gmail.com')
        cy.get('#street').type('heheheStraße')
        cy.get('#zipCode').type('4222')
        cy.get('#city').type('Barcelona')

        //cy.get('input').type('qwer qwer')
        //cy.get('div').contains('qwer qwer').click()
        //cy.get('a').contains('Personalisieren').click()
        //cy.wait(2000)
        //cy.get('[role="combobox"]').eq(1).type('qwer').type('{enter}')
        //cy.get('[role="option"]').click()
        cy.get('#save-active').click()
        cy.wait(900)
        cy.get('a').contains('Bearbeiten >>').click()
        cy.get('select').eq(2).select(5)
        cy.get('#save-active').click()

        cy.wait(1000)
        cy.get('input').eq(2).type('vouchweihnachtenpers')
        cy.get('button').contains('Einlösen').click()

        cy.get('label').click()
        cy.wait(299)

        //cy.get('button').contains('Bankomat').click()
        cy.get('#assignButton').click()
        cy.wait(4000)


        //cy.get('span').contains('Rechnung.pdf').click
        cy.get('#emailInput').clear().type('robert.nguyen@solvistas.com')
        cy.get('button').eq(1).click()
        cy.visit('http://localhost:4200/admin/admin-season-ticket-overview')
        cy.get('#season-ticket-filter').type('220a2g19')
        cy.wait(4000)
        cy.get('td').contains('220a2g19')
        cy.get('#season-ticket-filter').type('210hfjjv')
        cy.wait(4000)

        // Dauerkarte entfernen
        //cy.get('td').contains('220a2g19').click()
        //cy.get('td').contains('220a2g19').click()
        //cy.wait(4000)
        //cy.get('span').contains(' Dauerkarte stornieren').click()
        //cy.get('#dialogDeleteBtn').click()

        cy.visit('http://localhost:4200/admin/admin-season-ticket-reservation')
        cy.wait(3000)

        cy.get('canvas').then($canvas => {
            const canvasWidth = $canvas.width();
            const canvasHeight = $canvas.height();

            let canvasCenterX = canvasWidth / 5.12;
            let canvasCenterY = canvasHeight / 3.009;

            cy.wrap($canvas)
                .scrollIntoView()
                .wait(500)
                .click(canvasCenterX, canvasCenterY)
        })
        cy.get('#assignButton').click()

        cy.visit('http://localhost:4200/admin/admin-season-ticket-assignment')
        cy.wait(3000)
        cy.get('canvas').then($canvas => {
            const canvasWidth = $canvas.width();
            const canvasHeight = $canvas.height();

            let canvasCenterX = canvasWidth / 5.12;
            let canvasCenterY = canvasHeight / 3.009;

            cy.wrap($canvas)
                .scrollIntoView()
                .wait(500)
                .click(canvasCenterX, canvasCenterY)
        })
        cy.wait(2000)
        cy.get('button').click()
    })
})