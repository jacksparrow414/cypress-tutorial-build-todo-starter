describe('List items', () => {
    beforeEach(() => {
        cy.seedAndVisit()
    })

    it('Propery displays completed items', () => {
        cy.get('.todo-list li')
          .filter('.completed')
          .should('have.length', 1)
          .and('contain', 'Eggs')
          .find('.toggle')
          .should('be.checked')
    });

    it('Show remaing todos in the fooer', () => {
        cy.get('.todo-count')
          .should('contain', 3)
    });

    it('Removes a todo', () => {
        cy.route({
            url: "/api/todos/1",
            method: 'DELETE',
            status: 200,
            response: {}
        })

        cy.get('.todo-list li')
          .as('list')

        cy.get('@list')
          .first()
          .find('.destroy')
          .invoke('show')
          .click()

        cy.get('.todo-list li')
          .should('have.length', 3)
          .and('not.contain', 'Milk')
    });
})