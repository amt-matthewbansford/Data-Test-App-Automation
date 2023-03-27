import patientRegis from "../../support/patRegis/patient-regis";

/// <reference types="Cypress" />

describe("Patient registration", () => {
    const patientReg = new patientRegis();

    before(function() {
        cy.fixture('patient').then(function(data) {
            globalThis.data = data;
        })

        patientReg.openapplication();
    });

    it("Register new patient", () => {
        patientReg.fillPatientData();
    })
})