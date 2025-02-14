describe("Compra de passagem", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Comprar passagem para Londres", () => {
    cy.title().should("eq", "BlazeDemo");

    cy.get('select[name="fromPort"]').select("Boston");

    cy.get('select[name="toPort"]').select("London");

    cy.get('input[value="Find Flights"]').click()

    cy.title().should("eq", "BlazeDemo - reserve");

    cy.get('input[value="Choose This Flight"]').eq('1').click()

    cy.title().should("eq", "BlazeDemo Purchase");

    cy.get('#inputName').type('Kerolyne Mary')

    cy.get('#address').type('General Road')

    cy.get('#city').type('Boston')

    cy.get('#state').type('Massachusetts')

    cy.get('#zipCode').type('88856000')

    cy.get('select[name="cardType"]').select("American Express");

    cy.get('#creditCardNumber').type('454657678998090')

    cy.get('#creditCardMonth').clear().type('08')

    cy.get('#creditCardYear').clear().type('2029')

    cy.get('#nameOnCard').type('Kerolyne Mary')

    cy.get('#rememberMe').check()

    cy.get('input[value="Purchase Flight"]').click()

    cy.title().should("eq", "BlazeDemo Confirmation");
  });
});