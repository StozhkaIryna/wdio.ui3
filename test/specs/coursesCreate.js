const {expect} = require('chai');
const { selectors } = require('../selectors');

const HOST = 'https://stage.pasv.us';
const LOGIN = `${HOST}/user/login`;

const admin = {
  email: 'testit10times@gmail.com',
  password: 'testIT10times'
};

describe('Testing Course Create process', () => {
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

  it('should have the correct user name on title', () => {
    const actual = $(selectors.userPageH1).getText();
    const expected = 'Test Testovich';
    expect(actual).equal(expected);
  });

  it ('should click on Courses link', ()=>{
    const element = $(selectors.courseLink);
    element.click();
    browser.pause(3000);
  });

  it ('should have the correct user name on title', () => {
    const actual = $(selectors.userPageH1).getText();
    const expected = 'Courses';
    expect(actual).equal(expected);
  });

  it ('should click on Create new courses button', ()=>{
    $(selectors.createNewCourseButton).click();
    browser.pause(3000);
  });

  it('should have the correct user name on title', () => {
    const actual = $(selectors.userPageH1).getText();
    const expected = 'Create Course';
    expect(actual).equal(expected);
  });

  // stopped here.

});