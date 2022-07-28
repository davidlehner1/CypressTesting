import {canvasClick, login} from "../../../support/shared";

describe('öffnet Verkaufsplan', () => {
    it('passes', () => {
        cy.visit('localhost:4200/sale')
        cy.wait(2000)
        login('solvistas@ea.com', 'solvistas')
    })
})

describe('öffnet den Saalplan', () => {
    it('passes', () => {
        cy.visit('localhost:4200/sale')
        cy.wait(2000)
        login('solvistas@ea.com', 'solvistas')
        cy.get("#eventTable").click(30, 100)
        cy.get('#stadiumPlanTab').click()
    })
})


describe('belegt sitze', () => {
    it('passes', () => {
        cy.visit('localhost:4200/sale')
        cy.wait(2000)
        login('solvistas@ea.com', 'solvistas')
        cy.get("#eventTable").click(30, 100)
        cy.get('#stadiumPlanTab').click()
        cy.wait(2000)
        cy.get('a').contains('+').click();
        canvasClick(2, 10)
        cy.wait(1000)
        cy.get('#ticketSelectionTab').click()
        cy.get('app-number-picker').children().children().eq(2).click() //scra
        cy.wait(200)
        /*cy.get('tr').children().children().eq(7).click()
        cy.get('div').contains('Reihe 1').scrollIntoView().click()           gak
        cy.get('div').contains('Sitz 2').scrollIntoView().click()*/
        cy.scrollTo("top")
        cy.wait(300)
        cy.get("span").contains("2 Tickets")
        cy.wait(5000)
        cy.get("app-sales-shopping-cart-card").find('button').click({force: true, multiple: true})
        cy.wait(500)
        cy.get("app-sales-shopping-cart-card").find('button').click({force: true, multiple: true})
        cy.wait(5000)
    })
})

describe('Verkauf/Bezahlarten + stornieren', function () {
    it('passes', function () {
        cy.visit('localhost:4200/sale')
        login('solvistas@ea.com', 'solvistas')
        cy.get('tbody').children().last().click()
        cy.wait(2000)
        cy.get('button').contains('+').click()
        cy.wait(1000)
        cy.get('span').contains('Personalisieren').click()
        cy.get('[role=combobox]').eq(1).type('solvistas')
        cy.get('div').contains('Admin Admin').click()
        cy.get('#save-active').click()
        cy.wait(500)
        cy.get('button').contains('Bankomat').click()
        cy.get('#btnBuyTickets').click()
        cy.visit('localhost:4200/sale')
        cy.get('tbody').children().last().click()
        cy.wait(2000)
        cy.get('button').contains('+').click()
        cy.wait(1000)
        cy.get('span').contains('Personalisieren').click()
        cy.get('[role=combobox]').eq(1).type('solvistas')
        cy.get('div').contains('Admin Admin').click()
        cy.get('#save-active').click()
        cy.get('#btnBuyTickets').click()
        cy.visit('localhost:4200/admin/allorders')
        cy.get('tbody').children().eq(1).click()
        cy.wait(500)
        cy.get('span').contains('Bestellung stornieren').click()
        cy.get('#dialogDeleteBtn').click()
        cy.visit('localhost:4200/admin/allorders')
        cy.get('tbody').children().eq(1).contains('Storniert')
    });
});

describe('Personalisiert Tickets mit vorgefertigter Person', () => {
    it('passes', () => {
        cy.visit('localhost:4200/sale')
        cy.wait(2000)
        login('solvistas@ea.com', 'solvistas')
        cy.wait(1000)
        cy.get("#eventTable").click(30, 100)
        cy.get('#stadiumPlanTab').click()
        cy.wait(3000)
        cy.get('a').contains('+').click();
        canvasClick(2, 10)
        cy.get('#ticketSelectionTab').click()
        cy.get('app-number-picker').children().children().eq(2).click() //scra
        cy.wait(200)
        /*cy.get('tr').children().children().eq(7).click()
        cy.get('div').contains('Reihe 1').scrollIntoView().click()           gak
        cy.get('div').contains('Sitz 2').scrollIntoView().click()*/
        cy.scrollTo("top")
        cy.wait(300)
        cy.get("span").contains("2 Tickets")
        cy.wait(1000)
        cy.get('span').contains('Personalisieren').click()
        cy.get('[role=combobox]').eq(1).type('solvistas')
        cy.get('div').contains('Admin Admin').click()
        cy.get('#save-active').click()
        cy.get('a:contains("Person für alle Tickets übernehmen")').first().click()
        cy.get('#btnBuyTickets').click()
    })
})

//Test funktioniert nur einmal, da die Plätze statisch gewählt werden
//an sich funktioniert der Test

//Problem mit sitzen es wird nicht das ganze Stadion belegt

describe('E-Mail versenden', ()=>{
    it('passes', ()=>{
        cy.visit('http://localhost:4200/admin/allorders')
        login('solvistas@ea.com', 'solvistas')
        cy.get('tbody').children().first().click()
        cy.wait(500)
        cy.get('li').contains('Per E-Mail versenden').click()
        cy.get('#dialogDeleteBtn').click()
    })
})

describe('Rechnungsadresse ändern', () => {
    it('passes', () => {
        cy.visit('http://localhost:4200/admin/allorders')
        login('solvistas@ea.com', 'solvistas')
        cy.get('tbody').children().first().click()
        cy.wait(500)
        cy.get('li').contains('Rechnung').click()
        cy.get('a').contains(' Rechnungsadresse ändern').click()
        cy.get('#firstName').clear().type('test')
        cy.get('#lastName').clear().type('test')
        cy.get('#companyName').clear().type('test')
        cy.get('#uid').clear().type('test')
        cy.get('#street').clear().type('test')
        cy.get('#zipCode').clear().type('1111')
        cy.get('#city').clear().type('test')
        cy.get('#country').select('Deutschland')
        cy.get('#save-active').click()
        cy.get('li').contains('Rechnung').click()
        cy.get('a').contains(' Rechnung herunterladen').click()
    })
})

describe('Alle Tagestickets herunterladen', ()=>{
    it('passes', ()=>{
        cy.visit('http://localhost:4200/admin/allorders')
        login('solvistas@ea.com', 'solvistas')
        cy.get('tbody').children().first().click()
        cy.wait(500)
        cy.get('li').contains('Alle Tagestickets herunterladen').click()
    })
})

describe('Ticketpos stornieren', ()=>{
    it('passes', ()=>{
        cy.visit('http://localhost:4200/admin/allorders')
        login('solvistas@ea.com', 'solvistas')
        cy.get('tbody').children().first().click()
        cy.wait(1000)
        cy.get('tr').eq(1).children().eq(5).click('center')
        cy.wait(2000)
        cy.get('div').contains(' Stornieren').click({force:true}) // button wird manchmal nicht erkannt
        cy.get('#dialogDeleteBtn').click()
    })
})
//issue: button wird teilweise nicht erkannt

describe('Monatsbeleg erstellen', ()=>{
    it('passes', ()=>{
        cy.visit('http://localhost:4200/admin/cash-boxes')
        login('solvistas@ea.com', 'solvistas')
        cy.get('tbody').children().first().click()
        cy.wait(500)
        cy.get('tr').first().click()
        cy.wait(500)
        cy.get('li').contains('Monatsbeleg erstellen').click()
        cy.get('th').contains('Erstellt am').click()
        cy.wait(500)
        cy.get('tr').eq(1).children().eq(6).click()
        cy.wait(1000)
        cy.get('button').contains("Beleg herunterladen").click({force:true})
    })
})

describe('Jahresbeleg erstellen', ()=>{
    it('passes', ()=>{
        cy.visit('http://localhost:4200/admin/cash-boxes')
        login('solvistas@ea.com', 'solvistas')
        cy.get('tbody').children().first().click()
        cy.wait(500)
        cy.get('tr').first().click()
        cy.wait(500)
        cy.get('li').contains('Jahresbeleg erstellen').click()
        cy.get('th').contains('Erstellt am').click()
        cy.wait(500)
        cy.get('tr').eq(1).children().eq(6).click()
        cy.wait(1000)
        cy.get('button').contains("Beleg herunterladen").click({force:true})
    })
})

describe('Tickets vordrucken', ()=>{
    it('passes', ()=>{
        cy.visit('http://localhost:4200/admin/admin-pre-print-tickets')
        login('solvistas@ea.com', 'solvistas')
        cy.get('#event').select(1)
        cy.get('#event-categories').select(1)
        cy.get('#ticket-prices').select(1)
        cy.get('#amount').clear().type('1')
        cy.get('input').eq(1).click()
    })
})