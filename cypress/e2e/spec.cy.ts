describe('Test Meal finder', () => {
  it.skip('should open', () => {
    cy.visit('http://localhost:3000/')
  });
  it('should type Pasta', () => {
    cy.visit('http://localhost:3000/')
        .get('#root > div > div > input[type=text]')
        .type("Pasta")

  });
  it('should search for Pasta', () => {
    cy.visit('http://localhost:3000/')
        .get('#root > div > div > input[type=text]')
        .type("Pasta")
        .get('#root > div > div > button:nth-child(3)')
        .click()
  });
  it('should search for nothing', () => {
    cy.visit('http://localhost:3000/')
        .get('#root > div > div > button:nth-child(3)')
        .click()
  })
})