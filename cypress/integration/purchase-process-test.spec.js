// test1.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress"/>
import {Process} from "./action/process.js"

describe("Purchase process tests", () => {
    it("Test Case 1", () => {
        const process1 = new Process()
        process1.navigate()
        process1.selectProductAndQty("Samsung Galaxy Tab", "2")
        process1.login("test@test.com", "jjXs2_53d")
        process1.paymentProcess()
        process1.executePayment()
    })

    it("Test Case 2", () => {
        const process2 = new Process()
        process2.navigate()
        process2.selectProductAndQty("Beloved", "3")
        process2.login("test@test.com", "jjXs2_53d")
        process2.paymentProcess()
        process2.executePayment()
    })
})