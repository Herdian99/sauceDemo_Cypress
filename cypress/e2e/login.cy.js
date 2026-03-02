describe('login with valid credentials', () => {
  it('should successfully login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
  })
})

describe('login with invalid username', () => {
  it('should show error message', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('wrong_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
  })});

describe('login with invalid password', () => {
  it('should show error message', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrong_password')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
  })});

describe('login with empty credentials', () => {
  it('should show error message', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Username is required')
  })});