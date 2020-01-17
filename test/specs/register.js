
const assert = require('assert');
const {expect} = require('chai');

const firstName = 'Test';
const lastName = 'Testovich';
const email = Math.random() + '@test.com';
const phone = '19994443322';
const password = 'testIT10times';

describe('Register page', () => {
    before( () => {
        browser.url('https://stage.pasv.us/user/register')
    });

    it('should have the right title', () => {
        const actual = browser.getTitle()
        const expected = 'Progress Monitor';
        expect(actual).equal(expected);
    });

    it('should have a correct title', () => {
        const actual = $('h1').getText();
        const expected = 'User Register';
        expect(actual).equal(expected);
    });

    it('should have a correct description', () => {
        const actual = $('p').getText();
        const expected = 'Profiles with fictitious or dummy data will be deleted.';
        expect(actual).equal(expected);
    });

    it('should have a correct button text', () => {
        const actual = $('form button').getText();
        const expected = 'Submit';
        expect(actual).equal(expected);
    });

    //TO CREATE A NEW USER

    it('should fill up first Name field', () => {
        const element = $('form input[name="firstName"]');
        element.setValue(firstName);
    });

    it('should fill up last Name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue(lastName);
    });

    it('should fill up phone field', () => {
        const element = $('form input[name="phone"]');
        element.setValue(phone);
    });

    it('should fill up email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
    });

    it('should fill up password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(password);
    });

    it('should fill up about field', () => {
        const element = $('form textarea[name="about"]');
        element.setValue('one two three');
    });

    it('should fill up my goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue('eat & sleep');
    });

    it('should chose from dropdown box English level', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText('Zero');
    });

    it('should chose click button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(3000);
    });

});


describe('Login page', () => {
    before(() => {
        browser.url('https://stage.pasv.us/user/login')
    })

    it('should have a correct title', () => {
        const actual = $('h1').getText();
        const expected = 'User Login';
        expect(actual).equal(expected);
    });

    it('should fill email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
    })

    it('should fill Password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(password);
    })

    it('should chose click button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(3000);
    })

    it('should have a correct title', () => {
        const actual = $('h1').getText();
        const expected = 'You are a new user';
        expect(actual).equal(expected);
        browser.pause(2000);
    });

})