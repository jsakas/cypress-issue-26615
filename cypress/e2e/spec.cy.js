/// <reference types="cypress" />
describe('page', () => {
  it('selects a location', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#google-map-demo').type('Denver')    

    cy.get('#Denver').click()
  })
})
