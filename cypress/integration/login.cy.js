///<refernce type = 'cypress' />

describe('Restful booker', ()=>{

    it('launch application', ()=>{
        cy.visit('https://automationintesting.online/')
        cy.get('img.hotel-logoUrl').should('be.visible')
    })
})