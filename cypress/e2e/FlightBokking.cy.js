///reference types = 'cypress-xpath'
describe("flight Booking",()=>{

 it.skip("flight Booking",()=>{

    cy.visit("https://www.goibibo.com/")
    cy.get(".sc-eWfVMQ.diuirR>li:nth-child(1)").click()

    cy.get(".sc-eLwHnm.hHxEGr.fswWidgetPlaceholder").eq(0).type("s")
    cy.wait(5000)
    .contains("Surat, India").click()   
    
    cy.get(".sc-eLwHnm.hHxEGr.fswWidgetPlaceholder").eq(1).type("p",{force:true})
    cy.wait(5000)
    .contains("PNQ, Pune Airport").click()   
   })
   it("Flight booking ",()=>{
      cy.visit("https://www.goibibo.com/")
      cy.viewport(1000,660)
      cy.get('.sc-clIzBv.bhRlrM.fswWidgetLabel').eq(0).click({force:true})
      cy.wait(7000)
      cy.get('[type="text"]').type('Pune',{force:true})
      cy.contains('Pune, India').click({force:true})
      cy.get('.sc-gsNilK.dImRia').click({force:true})
      cy.get('[type="text"]').type('Mumbai',{force:true})
      cy.contains('Mumbai, India').click({force:true})
      cy.xpath("//div[@class='DayPicker-Month']/div[3]/div[2]/div[p=5]").click()
      cy.get("[class='fswFld__title']").should("have.text","5 Apr'23")
      cy.get(".sc-cvZCdy.iEJrkB").click({force:true})

   })

})