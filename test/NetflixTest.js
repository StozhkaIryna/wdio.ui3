const {expect} = require('chai');
describe('TEST NETFLIX APP SIGN IN', () => {
    before('go to netflix.com', () => {
        browser.url('https://www.netflix.com/')
    });
    it("should have correct title NETFLIX", () => {
        const element = $('//title[contains(text(),"Netflix - Watch TV Shows Online")]').getTitle();
        expect(element).equal('Netflix - Watch TV Shows Online, Watch Movies Online');
    });
    it('should check Sign In button is clickable', () => {
        const buttonSighIn = $('//a[@class="authLinks redButton"]');
        const actual = buttonSighIn.isClickable();
        expect(actual).true;
    });
    it('should click Sign In button', () => {
        const element = $('//a[@class="authLinks redButton"]').click();
        browser.waitUntil( () => $('//h1[contains(text(),"Sign In")]').isDisplayed());
        expect($('//h1[contains(text(),"Sign In")]').getText()).equal('Sign In');
    });
    it('should fill in Sign In form', () => {
        const emailInput = $('//input[@id="id_userLoginId"]').setValue('testemail@gmail.com');
        const passwordInput = $('//input[@id="id_password"]').setValue('testPasword1');
        const signInBtn = $('//button[@class="btn login-button btn-submit btn-small"]').isClickable();
        expect(signInBtn).true;
    });
    it('should click Need help? link', () => {
        const needHelp = $('//a[@class="login-help-link"]').click();
        browser.waitUntil( () => $('//h1[contains(text(),"Forgot Email/Password")]').isDisplayed());
        expect($('//h1[contains(text(),"Forgot Email/Password")]').getText()).equal('Forgot Email/Password');
    });
    it('should fill in Email Forgot Email/Password form', () => {
        const emailInput = $('//input[@placeholder="name@example.com"]').setValue('testemail@gmail.com');
        const emailMeBtn = $('//button[@class="btn forgot-password-action-button btn-blue btn-large"]').isClickable();
        expect(emailMeBtn).true;
    });
    it('should fill in Text Message (SMS) Forgot Email/Password form', () => {
        //Click on LABEL(!!!!), not on INPUT element//
        const textMessageRadioBtn = $('//label[contains(text(),"Text Message (SMS)")]').click();
        const selectCountryDrDown = $('//a[@class="ui-select-wrapper-link"]').click();
        browser.waitUntil( () => $('//ul[@class="ui-select-options flag-select-item-list"]').isDisplayed());
        const countryVatican = $('//span[contains(text(),"Vatican City")]').click();
        const phoneInput = $('//input[@class="ui-text-input"]').setValue('19251234567');
        const textMeButton = $('//button[@class="btn forgot-password-action-button btn-blue btn-large"]').isClickable();
    });
    it('should  click and check `I don\'t remember my email or phone` link', () => {
        $('//a[@class="forgot-password-mop-link"]').click();
        browser.waitUntil( () => $('//h1[contains(text(),"Forgot Email/Password")]')).isDisplayed();
        const firstNameInput = $('//input[@id="firstName"]').setValue('Test');
        const lastNameInput = $('//input[@id="lastName"]').setValue(('Testov'));
        const cardNumberInput = $('//input[@id="cardNumber"]').setValue('1234');
        const findAccountBtn = $('//button[@class="btn btn-blue btn-small"]').isClickable();
        expect(findAccountBtn).true;
        const cancelBtn = $('//button[@class="btn btn-plain btn-small"]').isClickable();
        expect(cancelBtn).true;
    });
});