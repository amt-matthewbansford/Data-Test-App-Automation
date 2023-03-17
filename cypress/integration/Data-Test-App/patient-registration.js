/// <reference types="Cypress" />

describe("Patient registration", () => {
    it("Register new patient", () => {
        cy.visit("localhost:3000")
        cy.get('input[data-test-id= "first-name"]').type('Matthew')
        cy.get('input[data-test-id= "middle-name"]').type('Kobbinah')
        cy.get('input[data-test-id= "last-name"]').type('Bansford')
        cy.get('input[data-test-id= "phone-number"]').type('0235468653')
        cy.get('input[data-test-id= "dob"]').invoke('attr', 'value', '2023-04-13').trigger('input')
        cy.get('textarea[data-test-id= "address"]').type('Plot 330, Tanokrom')
        cy.get('a[data-test-id= "submit-btn"').click()
        cy.get('div[data-test-id= "user-info"] h4').should('contain', 'Matthew Kobbinah Bansford')    
    })
})