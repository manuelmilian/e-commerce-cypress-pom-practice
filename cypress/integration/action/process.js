import { Catalog } from "../page/catalog"
import { AdvancedSearchResult } from "../page/advanced-search-result"
import { ProductInfo } from "../page/product-info"
import { ShoppingCart } from "../page/shopping-cart"
import { Login } from "../page/login"
import { CheckoutShipping } from "../page/checkout-shipping"
import { CheckoutPayment } from "../page/checkout-payment"
import { CheckoutConfirmation } from "../page/checkout-confirmation"

export class Process{

    navigate(){
        cy.visit("http://sqademosatp.net/catalog/");
        
    }
    
    selectProductAndQty(product, qty){
        const catalog = new Catalog()
        const advancedSearch = new AdvancedSearchResult()
        const productInfo = new ProductInfo
        const shoppingCart = new ShoppingCart()

        cy.get('h1').should("have.text","Welcome to DemoSQAUPC") // Confirm that we're on Catalog page
        catalog.quickFind(product)

        cy.get('h1').should("have.text","Products meeting the search criteria") // Confirm that we're on Advanced_search_result page
        advancedSearch.clickOnProduct()

        cy.get('#bodyContent > form > :nth-child(1) > :nth-child(2)').should("include.text",product) // Confirm that we're on Product_info page
        productInfo.clickOnAddToCart()

        cy.get('h1').should("have.text","What's In My Cart?") // Confirm that we're on Shoppin_cart page
        shoppingCart.updateQty(qty)
        cy.get('[valign="top"] > [type="text"]').should("have.value", qty) // Confirm that the quantity is correct
        
        shoppingCart.clickOnCheckout()
    }

    login(email, password){
        const login = new Login()
        
        cy.get('h1').should("have.text","Welcome, Please Sign In") // Confirm that we're on Login page
        login.email(email)
        login.password(password)
        login.clickOnSingIn()
    }

    paymentProcess(){
        const checkoutShipping = new CheckoutShipping
        const checkoutPayment = new CheckoutPayment

        cy.get('h1').should("have.text","Delivery Information") // Confirm that we're on Checkout_shipping page
        checkoutShipping.clickOnContinue()

        cy.get('h1').should("have.text","Payment Information") // Confirm that we're on Checkout_payment page
        checkoutPayment.cashOnDelivery()
        checkoutPayment.clickOnContinue()
    }

    executePayment(){
        const checkoutConfirmation = new CheckoutConfirmation

        cy.get('h1').should("have.text","Order Confirmation") // Confirm that we're on Checkout_confirmation page
        checkoutConfirmation.clickOnConfirmOrder()

        cy.get('h1').should("have.text","Your Order Has Been Processed!") // Confirm that the order has been processed
    }
}