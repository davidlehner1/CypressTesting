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