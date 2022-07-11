describe('Registrieren mit Frima', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/register')
    cy.get('#firstname').type('Vorname')
    cy.get('#lastname').type('Nachname')
    cy.get('#email').type('messi2@gmail.com')
    cy.get('#confirmEmail').type('messi2@gmail.com')
    cy.get('#phone').type('123456789')
    cy.get('#birthdateinput').type('01.01.2001')
        .type('{enter}')
    cy.get('#street').type('test')
    cy.get('#zipCode').type('1111')
    cy.get('#city').type('city')
    cy.get('#password').type('test1234!')
    cy.get('#agb').check({force: true})

    cy.get('label').contains('Firma').click()

    cy.get('#organization_name').type('CR7')
    cy.get('#organization_uid').type('7')
    cy.get('#street').type('Werner-Heisenberg-Allee 25')
    cy.get('#zipCode').type('80939')
    cy.get('#city').type('München')
    cy.get('select').select('DE').should('have.value', 'DE')
    cy.get('#agb').check({force: true})

    cy.get('#register-button').click()



  })
})
describe('Registrieren ohne Frima', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/register')
    cy.get('#firstname').type('Vorname')
    cy.get('#lastname').type('Nachname')
    cy.get('#email').type('messi2@gmail.com')
    cy.get('#confirmEmail').type('messi2@gmail.com')
    cy.get('#phone').type('123456789')
    cy.get('#birthdateinput').type('01.01.2001')
        .type('{enter}')
    cy.get('#street').type('test')
    cy.get('#zipCode').type('1111')
    cy.get('#city').type('city')
    cy.get('#password').type('test1234!')
    cy.get('#agb').check({force: true})
    cy.get('#register-button').click()

  })
})
describe('Registrieren mit Frima', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/register')

    cy.get('label').contains('Firma').click()

    cy.get('#organization_name').type('CR7')
    cy.get('#organization_uid').type('7')
    cy.get('#street').type('Werner-Heisenberg-Allee 25')
    cy.get('#zipCode').type('80939')
    cy.get('#city').type('München')
    cy.get('select').select('DE').should('have.value', 'DE')
    cy.get('#agb').check({force: true})

    cy.get('#firstname').type('Vorname')
    cy.get('#lastname').type('Nachname')
    cy.get('#email').type('messi2@gmail.com')
    cy.get('#confirmEmail').type('messi2@gmail.com')
    cy.get('#phone').type('123456789')

    cy.get('#street').type('test')
    cy.get('#zipCode').type('1111')
    cy.get('#password').type('test1234!')
    cy.get('#agb').check({force: true})

    cy.get('#register-button').click()



  })
})
