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
         cy.get('#username').type('solvistas@ea.com')
         cy.get('#password').type('solvistas')
         cy.get('#btnLogin').click()
         cy.wait(5000)


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
        cy.get('input').type('qwer qwer')
        cy.get('div').contains('qwer qwer').click()
        //cy.get('label').click()
        cy.get('button').contains('Bankomat').click()
        cy.get('#assignButton').click()
        cy.wait(4000)

        //cy.get('span').contains('Rechnung.pdf').click
        cy.get('#emailInput').clear().type('robert.nguyen@solvistas.com')
        cy.get('button').eq(1).click()
        cy.get('#season-ticket-filter').type('220a2g19')
        cy.wait(4000)
        cy.get('td').contains('220a2g19')
        cy.get('#season-ticket-filter').type('210hfjjv')
        cy.wait(4000)
        cy.get('td').contains('210hfjjv').click()
        cy.get('td').contains('210hfjjv').click()
        cy.wait(4000)
        cy.get('span').contains(' Dauerkarte stornieren').click()
        cy.get('#dialogDeleteBtn').click()
    })
})