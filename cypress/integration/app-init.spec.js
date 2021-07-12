describe('App Initialization',()=>{
    beforeEach(()=>{
        
    })
    it('Loads todos on page load', () => {
        cy.seedAndVisit()
        cy.get('.todo-list li')
          .should('have.length', 4)
    });
} )