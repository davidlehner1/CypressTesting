describe('footer spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/events')

    cy.wait(1500)
    cy.get("span").contains('Alle akzeptieren').click()
    cy.get('#footerLinkAgb').click()
    cy.get('#footerLinkImpressum').click()
    cy.get('#footerLinkPrivacyPolicy').click()
    cy.get('#footerLinkHelp').click()
    cy.get('#footerLinkContact').click()

    cy.get('#contactName').type('test')
    cy.get('#email').type('messi2@gmail.com')
    cy.get('#selectedEvent').select(2)
    cy.get('#orderNr').type('1234')
    cy.get('#contactConcern').type('test')
    cy.get('#btnSubmitForm').click()

  })
})