export const login = (username, password) => {
    cy.visit('http://localhost:4200/login')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#btnLogin').click()
};
