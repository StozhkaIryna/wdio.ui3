
const assert = require('assert');
const { expect } = require('chai');

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

    it('should fill up first Name field', () => {
        const element = $('form input[name="firstName"]');
        element.setValue('John');
    });

    it('should fill up last Name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue('Smith');
    });

    it('should fill up phone num field', () => {
        const element = $('form input[name="phone"]');
        element.setValue('14523456');
    });

    it('should fill up email field', () => {
        const element = $('form input[name="email"]');
        element.setValue('abc@gmail.com');
    });

    it('should fill up password field', () => {
        const element = $('form input[name="password"]');
        element.setValue('abc123');
    });

    it('should fill up about field', () => {
        const element = $('form textarea[name="about"]');
        element.setValue('one two three');
    });

    it('should fill up my goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue('one two three');
    });

    it('should chose from dropdown box English level', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText('Zero');
        browser.pause(2000);
    });

});
