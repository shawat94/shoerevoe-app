

describe('Shoerevoe tests', function() {

  it('test header links', function() {
    cy.visit("http://localhost:3000")
    .get('#appbody')
    .get('#header')
    .contains('Posts')
    .click()
    .url().should('include', '/archive')

    cy.visit("http://localhost:3000")
    .get('#appbody')
    .get('#header')
    .contains('About')
    .click()
    .url().should('include', '/about')

    cy.visit("http://localhost:3000")
    .get('#appbody')
    .get('#header')
    .contains('ShoeRevoe')
    .click()
    .url().should('eq', 'http://localhost:3000/')
  })

  it('test archive search', function() {
    cy.visit("http://localhost:3000/archive")
    .get('#search')
    .get('input')
    .type('Nike Air Zoom Tempo Next%')
    .get('#archivetable')
    .get('tr')
    .should('have.length', 2)
  })
})