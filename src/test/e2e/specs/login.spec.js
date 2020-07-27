describe('First Test',()=> {
    it('Visit the login', () => {
        cy.visit('/login');
    })
    it('Accepts input', () => {
            const text = 'abbaco';
            cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').type(text);
            cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').type('123456');
        }
    )
    it('login in and release', () => {
        cy.get('.ant-btn').type('{enter}');

    })

})