export const login = (username, password) => {
    cy.visit('http://localhost:4200/login')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#btnLogin').click()
};

export const canvasClick = (yDivisor, xDivisor) => {
    cy.get('canvas').then($canvas => {
        const canvasWidth = $canvas.width();
        const canvasHeight = $canvas.height();

        let canvasCenterX = canvasWidth / xDivisor;
        let canvasCenterY = canvasHeight / yDivisor;

        cy.wrap($canvas)
            .scrollIntoView()
            .wait(500)
            .click(canvasCenterX, canvasCenterY)
    })
}

//@param {string} name | Put '#' before name
//@param {int} time | in ms
export const checkTickets = (name, time) =>{
    cy.get('th').contains('Tickets generiert ').click()
    for (let i = 0; i < 5; i++) {
        cy.wait(time)
        cy.get(name).click()
        cy.wait(6000)
        cy.get('span').contains('Zurück').click()
        cy.wait(200)
        let testChild = cy.get(name).children().children().eq(0);
        if(testChild.contains( 'Ja')){
            i = 5
        }
    }
}