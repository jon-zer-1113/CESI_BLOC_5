let HOST = require("../host.js");

let {account} = require("../account.js");

let product = {
    title: "Un ballon de foot",
    desc: "Superbe ballon de foot de la coupe du monde 1998 ! Allez les bleux !",
    city: "Mérignac"
}

describe("création d'un article", async() => {
    it('creates an article', () => {
        cy.visit(HOST+'login');
        cy.get('#exampleInputEmail1').type(account.email);
        cy.get('#exampleInputPassword1').type(account.password);
        cy.get('[name=submit]').click();
        cy.get('#dropdownMenu1').should('exist');
        cy.contains('Déposer une annonce').click();
        cy.get("#e1").type(product.title);
        cy.get("#e2").type(product.desc);
        cy.get(".form-control.cityAutoComplete").type(product.city)
        cy.get("[name='submit']").click()
        cy.contains(product.title).should('exist');
    })
    
});