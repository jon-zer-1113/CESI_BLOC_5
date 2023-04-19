let HOST = require("../host.js");

let {account} = require("../account.js");

describe('connexion', () => {
  
  it('logs user', () => {
    cy.visit(HOST+'login');
    cy.get('#exampleInputEmail1').type(account.email);
    cy.get('#exampleInputPassword1').type(account.password);
    cy.get('[name=submit]').click();
    cy.get('#dropdownMenu1').should('exist');
  })

});