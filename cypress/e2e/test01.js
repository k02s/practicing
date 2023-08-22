describe('visit the gpt AI', () => {
    
    it('login process', () => {
        cy.visit("https://chat.openai.com/")

        cy.get('.grid > :nth-child(2)').click()
        

    });
});
