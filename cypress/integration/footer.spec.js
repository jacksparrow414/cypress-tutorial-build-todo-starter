describe('Footer', ()=> {

 context('with a  signgle todo', () => {
     it('displays a singular do in count', () => {
        cy.seedAndVisit([{id:1, name: 'Buy milk', isComplete: false}])
        cy.get('.todo-count')
          .should('contain', '1 todo left')
     });
     
 })
})