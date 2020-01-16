
const assert = require('assert');
const { expect } = require('chai');

const firstName = 'Test';
const lastName = 'Testovich';
const phoneNum = '19994442211';
const email = 'testit10times@gmail.com';
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
        element.setValue('firstName');
    });

    it('should fill up last Name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue('lastName');
    });

    it('should fill up phoneNum field', () => {
        const element = $('form input[name="phoneNum"]');
        element.setValue('phoneNum');
    });

    it('should fill up email field', () => {
        const element = $('form input[name="email"]');
        element.setValue('email');
    });

    it('should fill up password field', () => {
        const element = $('form input[name="password"]');
        element.setValue('password');
    });

    it('should fill up about field', () => {
        const element = $('form textarea[name="about"]');
        element.setValue('1');
    });

    it('should fill up my goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue('eat & sleep');
    });

    it('should chose from dropdown box English level', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText('Native');
    });

    it('should chose click button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(2000);
    });

});


// login title
// email password
// log in button
// wait
// title first name + last name

