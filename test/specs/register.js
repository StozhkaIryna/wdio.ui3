
const assert = require('assert');
const {expect} = require('chai');

const email = Math.random() + '@test.com';
const URL_REGISTER = 'https://stage.pasv.us/user/register';
const URL_LOGIN = 'https://stage.pasv.us/user/login';

const user = {
     firstName : 'Test',
     lastName : 'Testovich',
     password : 'testIT10times',
     phone : '19994443322',
     email : email,
     about : 'one two three',
     goals : 'eat & sleep',
     englishLevel : 'Zero',
};

const page_register = {
    title : 'Progress Monitor',
    h1 : 'User Register',
    description: 'Profiles with fictitious or dummy data will be deleted.',
    buttonText: 'Submit'
};

const page_confirmation = {
    h1 : 'You are a new user',
};

const page_login = {
    title : 'Progress Monitor',
    h1 : 'User Login',
    description : 'Profiles with fictitious or dummy data will be deleted.',
    buttonText : 'Submit',
};

describe('Register page', () => {
    it('should have the right title', () => {
        browser.url(URL_REGISTER);
        const actual = browser.getTitle();
        const expected = page_register.title;
        expect(actual).equal(expected);
    });

    it('should have a correct title', () => {
        const actual = $('h1').getText();
        const expected = page_register.h1;
        expect(actual).equal(expected);
    });

    it('should have a correct description', () => {
        const actual = $('p').getText();
        const expected = page_register.description;
        expect(actual).equal(expected);
    });

    it('should have a correct button text', () => {
        const actual = $('form button').getText();
        const expected = page_register.buttonText;
        expect(actual).equal(expected);
    });

    //TO CREATE A NEW USER

    it('should fill up first Name field', () => {
        const element = $('form input[name="firstName"]');
        element.setValue(user.firstName);
    });

    it('should fill up last Name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue(user.lastName);
    });

    it('should fill up phone field', () => {
        const element = $('form input[name="phone"]');
        element.setValue(user.phone);
    });

    it('should fill up email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(user.email);
    });

    it('should fill up password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(user.password);
    });

    it('should fill up about field', () => {
        const element = $('form textarea[name="about"]');
        element.setValue(user.about);
    });

    it('should fill up my goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue(user.goals);
    });

    it('should chose from dropdown box English level', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText(user.englishLevel);
    });

    it('should click Submit button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(3000);
    });
});

describe('Login page', () => {
    it('should have a correct title', () => {
        browser.url(URL_LOGIN);
        const actual = browser.getTitle();
        const expected = page_login.title;
        expect(actual).equal(expected);
    });

    it('should have a correct text', () => {
        const actual = $('h1').getText();
        const expected = page_login.h1;
        expect(actual).equal(expected);
    });

    it('should fill email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(user.email);
    });

    it('should fill Password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(user.password);
    });

    it('should chose click Login button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(3000);
    });
});

    describe('Confirmation register page', () => {
    it('should have a correct title', () => {
        const actual = $('h1').getText();
        const expected = page_confirmation.h1;
        expect(actual).equal(expected);
        browser.pause(2000);
    });
});