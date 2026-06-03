describe('add to cart', () => {
  beforeEach(() => {
    cy.login()
  })

  it('should add 2 items to the cart', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('[data-test="shopping-cart-badge"]').should('contain', '2')
  })
});

describe('remove from cart', () => {
  beforeEach(() => {
    cy.login()
  })

  it('should remove an item from the cart', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('[data-test="shopping-cart-badge"]').should('contain', '2')
    cy.get('#remove-sauce-labs-backpack').click()
    cy.get('[data-test="shopping-cart-badge"]').should('contain', '1')
  })
});


//echo