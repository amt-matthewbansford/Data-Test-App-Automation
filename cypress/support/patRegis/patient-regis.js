class patientRegis {
    openapplication () {
        cy.visit("localhost:3000")
    }
    
    fillPatientData() {
        cy.get('input[data-test-id= "first-name"]').type(data.firstname)
        cy.get('input[data-test-id= "middle-name"]').type(data.middlename)
        cy.get('input[data-test-id= "last-name"]').type(data.lastname)
        cy.get('input[data-test-id= "phone-number"]').type(data.phonenumber)
        cy.get('input[data-test-id= "dob"]').invoke('attr', 'value', data.dateofbirth).trigger('input')
        cy.get('textarea[data-test-id= "address"]').type(data.address)
        cy.get('a[data-test-id= "submit-btn"').click()
        cy.get('div[data-test-id= "user-info"] h4').should('contain', 'Matthew Kobbinah Bansford')
    } 
}
export default patientRegis;