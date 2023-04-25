describe("Assignment No.7",()=>{
   it("Ecommarce website ",()=>{

         // cy.visit("https://automationteststore.com/")
         // cy.get('.nav-pills > :nth-child(2) > [href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click()


          cy.visit("https://www.flipkart.com/")
          cy.xpath('//div[@class="_37M3Pb"]/div[2]').click()
          cy.wait(2000)
          cy.xpath('//div[@class="_37K3-p"]/div[1]').click({multiple:true})
          //cy.contains("realme C33 2023 (Aqua Blue, 64 GB)").click()
          cy.wait(4000)
          cy.contains("realme C33 2023 (Aqua Blue, 64 GB").then((e)=>{
    
            let url = e.prop('href')
        
            cy.visit(url)
        
            cy.url().should('include','https://www.flipkart.com/')
          
            cy.wait(2000)
        
            //cy.go('back')
            cy.contains("//div[@class='_1p3MFP dTTu2M']/ul/li[1]").then((e)=>{
    
               let url = e.prop('href')
           
               cy.visit(url)
           
               cy.url().should('include','https://www.flipkart.com/')
             
               cy.wait(2000)
           
               cy.go('back')
          // cy.get("[class='_2KpZ6l _2U9uOA _3v1-ww']").click({multiple:true})
          //cy.xpath("//div[@class='_1p3MFP dTTu2M']/ul/li[1]").click({force:true})
          //cy.get("[type='button']").click()
          //cy.get("[class='_3iRXzi']").click({force:true})

   })

   })

   })
})