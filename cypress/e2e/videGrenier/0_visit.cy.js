let HOST = require("../host.js");

describe('visite du site', () => {

  it('test du bon fonctionnement de la visite du site', () => {
    cy.visit(HOST);
  })
  
});