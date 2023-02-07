describe('Test Meal finder', () => {
  it('should open', () => {
    cy.visit('http://localhost:3000/')
  });
  it('should type Pasta', () => {
    cy.visit('http://localhost:3000/')
        .get('#txInput')
        .type("Pasta")
        .should('have.value', 'Pasta');

  });
  it('should search for Pasta', () => {
    cy.visit('http://localhost:3000/')
        .get('#txInput')
        .type("Pasta")
        .get('#btSearchByName')
        .click()
        .get('#taOutput')
        .contains('Pasta');
  });
  it('should search for nothing', () => {
    cy.visit('http://localhost:3000/')
        .get('#btSearchByName')
        .click()
        .get('#taOutput')
        .should('not.be.empty');
  })
  it('should get a random meal',  () => {
    cy.visit('http://localhost:3000/')
        .get('#btGetRandomMeal')
        .click()
        .get('#taOutput')
        .should('not.be.empty');
  });
  it('should get the details of a meal with the id',  () => {

  });
})