import {login} from "../../support/shared";

describe('Als User einloggen', () => {
    it('passes', () => {
        cy.visit('http://localhost:4200/login')
        login('test@gmail.com', 'test1234!')
    })
})
