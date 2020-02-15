const {expect} = require('chai');

const { selectors } = require('../selectors');

const HOST = 'https://stage.pasv.us';
const LOGIN = `${HOST}/user/login`;

const admin = {
    email: 'testit10times@gmail.com',
    password: 'testIT10times'
};


describe('Testing Day Report Create process', () => {
    it('should have a login page title', () => {
        browser.url(LOGIN);
        const actual = $(selectors.h1).getText();
        const expected = 'User Login';
        expect(actual).equal(expected);
    });

    it('should fill email field', () => {
        const element = $(selectors.emailInput);
        element.setValue(admin.email);
    });

    it('should fill Password field', () => {
        const element = $(selectors.passwordInput);
        element.setValue(admin.password);
    });

    it('should click LOGIN BUTTON', () => {
        $(selectors.submitButton).click();
        browser.pause(2000);
    });

    it ('should have the correct user name on title', () => {
        const actual = $(selectors.userPageH1).getText();
        const expected = 'Test Testovich';
        expect(actual).equal(expected);
    });

    it ('should click on Diary link', ()=>{
        const element = $(selectors.diaryLink);
        element.click();
        browser.pause(3000);
    });

    it ('should have the correct page title', () => {
        const actual = $(selectors.userPageH1).getText();
        const expected = 'Daily reports';
        expect(actual).equal(expected);
    });

    it ('should click on create Day Report', ()=>{
        const element = $(selectors.createDayRepButton);
        element.click();
        browser.pause(3000);
    });

    it ('should have the correct page title', () => {
        const actual = $(selectors.userPageH1).getText();
        const expected = 'Create day report';
        expect(actual).equal(expected);
    });

    it('should check box necessary boxes', () => {
        const element1 = $(selectors.checkBox.help);
        const element2 = $(selectors.checkBox.lectures);
        const element3 = $(selectors.checkBox.recruiter);
        element1.click();
        element2.click();
        element3.click();
        browser.pause(2000);
    });

    it('should chose a moral from dropdown box', () => {
        const element = $(selectors.moralDropDown);
        element.selectByVisibleText('9');
    });

    it('should  fill hours field', () => {
        const element = $(selectors.hours);
        element.setValue('5');
        browser.pause(2000);
    });

    it('should fill up description field with details', () => {
        const element = $(selectors.description);
        element.setValue('testing_'.repeat(18));
        browser.pause(2000);
    });

    it('should click SAVE BUTTON', () => {
        $(selectors.submitButton).click();
        browser.pause(2000);
    });

    it ('should have fresh created report on the page', () => {
        const actual = $(selectors.reportConfirm).getText();
        const expected = 'testing_'.repeat(18);
        expect(actual).equal(expected);
    });
    it('should create Day Report button  exist', () => {
        const actual = $(selectors.createDayRepButton).isExisting();
        expect(actual).true;
        browser.pause(2000);
    });

});