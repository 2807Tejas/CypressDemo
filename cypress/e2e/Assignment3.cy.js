describe('Check UI elements', () => {
    Cypress.on('uncaught:exception', () => false)



    it('Checking Radio Buttons', () => {
        cy.visit('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm')

        //cy.xpath('//div[@class="nxt-btn"]').click()
        //cy.wait(2000)
        //cy.xpath('//div[@class="pre-btn"]').click()
        // cy.get('[id*=how-select]').select('Podcast').should('have.value','Podcast') 
        cy.get('[name="firstname"]').type("Mahesh",{force: true})
        cy.get('[name="lastname"]').type("Jain",{force: true})
        cy.get('[value="Male"]').check({force: true})
        cy.get('[type="radio"]').eq(7).click({force: true})
        cy.xpath('//table/tbody/tr[5]/td[2]//input[@type="text"]').type("10 April 2023",{force: true})
        cy.get('[value="Manual Tester"]').check({force: true})
        cy.get('[name="photo"]').selectFile("/home/lenovo/swapnil/cypress/fixtures/josh logo.jpg",{force: true})
        cy.get('[type="checkbox"]').check(['RC','Selenium IDE'],{force: true})
        // cy.get('[value="RC"]').check()
        // cy.get('[value="Selenium IDE"]').check()
        // cy.get('[value="Selenium IDE"]').uncheck()
        cy.get('[name="continents"]').select('Australia',{force: true})
        cy.get('[name="selenium_commands"]').select('Switch Commands',{force: true})
        cy.get('[name="submit"]').click({force: true})
  
    })
  })