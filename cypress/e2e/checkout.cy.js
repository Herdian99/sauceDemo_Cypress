describe('checkout', () => {
  beforeEach(() => {
    cy.login()
  })    
  
    it('should complete checkout process', () => {
      cy.get('#add-to-cart-sauce-labs-backpack').click()
      cy.get('#add-to-cart-sauce-labs-bike-light').click()
      cy.get('#shopping_cart_container').click()
      cy.get('#checkout').click()
      cy.get('#first-name').type('John')
      cy.get('#last-name').type('Doe')
      cy.get('#postal-code').type('12345')
      cy.get('#continue').click()
      cy.get('#finish').click()
      cy.get('#back-to-products').should('be.visible')
    })});

    describe('checkout with missing information', () => {
      beforeEach(() => {
        cy.login()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#shopping_cart_container').click()
        cy.get('#checkout').click()
      })

      it('should show error for missing field mandatory', () => {
        cy.get('#continue').click()
        cy.get('.error-message-container').should('contain', 'Error: First Name is required')
      })});