describe('Test Meal finder', () => {
  it('should open', () => {
    cy.visit('http://localhost:3000/')
  });
  it('should type Pasta', () => {
    cy.visit('http://localhost:3000/')
        .get('#root > div > div > input[type=text]')
        .type("Pasta")
        .should('have.value', 'Pasta');

  });
  it('should search for Pasta', () => {
    cy.visit('http://localhost:3000/')
        .get('#root > div > div > input[type=text]')
        .type("Pasta")
        .get('#root > div > div > button:nth-child(3)')
        .click()
        .get('#root > div > div > textarea')
        .contains('Pasta');
  });
  it('should search for nothing', () => {
    cy.visit('http://localhost:3000/')
        .get('#root > div > div > button:nth-child(3)')
        .click()
        .get('#root > div > div > textarea')
        .should('not.be.empty');
  })
  it('should get a random meal',  () => {
    cy.visit('http://localhost:3000/')
        .get('#root > div > div > button:nth-child(5)')
        .click()
        .get('#root > div > div > textarea')
        .should('not.be.empty');
  });
})