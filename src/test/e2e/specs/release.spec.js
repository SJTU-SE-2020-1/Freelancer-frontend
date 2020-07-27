let LOCAL_STORAGE_MEMORY = {};
Cypress.Commands.add("saveLocalStorage",()=>{
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    })
});

Cypress.Commands.add("restoreLocalStorage",()=>{
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key,LOCAL_STORAGE_MEMORY[key]);
    })
});

describe('Release', () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
        cy.visit('/login');
        cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').type('abbaco');
        cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').type('123456');

    });
     afterEach(()=>{
         cy.saveLocalStorage();
     });

    it('login in and release', () => {
        cy.get('.ant-btn').type('{enter}');
        cy.visit('/release');
        cy.get('#title').type('test');
        cy.get('#description').type('This is an e2e test');
        cy.get('#paymentLower').type('100');
        cy.get('#paymentHigher').type('500');
        cy.get('#biddingDdl').click().get('.ant-picker-now-btn').click();
        cy.get('#finishDdl').type('2020-08-31 00:00:00',{force:true});
        cy.get('.ant-btn.ant-btn-primary.ant-btn-sm').click({multiple:true ,force:true});
        cy.get('.ant-form-item-control-input-content > .ant-btn').type('{enter}');
        cy.get('#title').clear();
        cy.get('#description').clear();
        cy.get('#paymentLower').clear();
        cy.get('#paymentHigher').clear();
        cy.get(':nth-child(5) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker > .ant-picker-input > .ant-picker-clear > .anticon > svg > path').click({force: true});
        cy.get(':nth-child(6) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker > .ant-picker-input > .ant-picker-clear > .anticon > svg > path').click({force: true});
    })

})