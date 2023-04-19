let HOST = require("../host.js");

describe('création de compte', () => {
    
    const newUsername = 'testUser123';
    const newEmail = 'testUser123@example.com';
    const newPassword = 'TestPassword123';
    
    it('creates a new account', () => {
        cy.visit(HOST+'register');
        cy.get('#username').type(newUsername);
        cy.get('#exampleInputEmail1').type(newEmail);
        cy.get('#exampleInputPassword1').type(newPassword);
        cy.get('#exampleInputPassword2').type(newPassword);
        cy.get('[name=submit]').click();
    });

});