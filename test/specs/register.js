const {expect} = require('chai');

const HOST = 'https://stage.pasv.us';
const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;

const email = Math.random() + '@test.com';

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

const pageRegister = {
  title : 'Progress Monitor',
  h1 : 'User Register',
  description: 'Profiles with fictitious or dummy data will be deleted.',
  buttonText: 'Submit'
};

const pageRegisterSelectors = {
  h1 : 'h1',
  description : 'p',
  submitButton : 'form button[type="submit"]',
  firstNameInput : 'form input[name="firstName"]',
  lastNameInput : 'form input[name="lastName"]',
  phoneInput : 'form input[name="phone"]',
  emailInput : 'form input[name="email"]',
  passwordInput : 'form input[name="password"]',
  aboutInput : 'form textarea[name="about"]',
  goalsInput : 'form textarea[name="goals"]',
  englishLevelInput : 'form select[name="englishLevel"]',
};

const pageLogin = {
  title : 'Progress Monitor',
  h1 : 'User Login',
  description : 'Profiles with fictitious or dummy data will be deleted.',
  buttonText : 'Submit',
};

const pageConfirmation = {
  h1 : 'You are a new user',
};

/*
TESTS
 */

describe('Register page', () => {
  it('should have the right title', () => {
    browser.url(URL_REGISTER);
    const actual = browser.getTitle();
    const expected = pageRegister.title;
    expect(actual).equal(expected);
  });

  it('should have a correct title', () => {
    const actual = $(pageRegisterSelectors.h1).getText();
    const expected = pageRegister.h1;
    expect(actual).equal(expected);
  });

  it('should have a correct description', () => {
    const actual = $(pageRegisterSelectors.description).getText();
    const expected = pageRegister.description;
    expect(actual).equal(expected);
  });

  it('should have a correct button text', () => {
    const actual = $(pageRegisterSelectors.submitButton).getText();
    const expected = pageRegister.buttonText;
    expect(actual).equal(expected);
  });

  //TO CREATE A NEW USER

  it('should fill up first Name field', () => {
    const element = $(pageRegisterSelectors.firstNameInput);
    element.setValue(user.firstName);
  });

  it('should fill up last Name field', () => {
    const element = $(pageRegisterSelectors.lastNameInput);
    element.setValue(user.lastName);
  });

  it('should fill up phone field', () => {
    const element = $(pageRegisterSelectors.phoneInput);
    element.setValue(user.phone);
  });

  it('should fill up email field', () => {
    const element = $(pageRegisterSelectors.emailInput);
    element.setValue(user.email);
  });

  it('should fill up password field', () => {
    const element = $(pageRegisterSelectors.passwordInput);
    element.setValue(user.password);
  });

  it('should fill up about field', () => {
    const element = $(pageRegisterSelectors.aboutInput);
    element.setValue(user.about);
  });

  it('should fill up my goals field', () => {
    const element = $(pageRegisterSelectors.goalsInput);
    element.setValue(user.goals);
  });

  it('should chose from dropdown box English level', () => {
    const element = $(pageRegisterSelectors.englishLevelInput);
    element.selectByVisibleText(user.englishLevel);
  });

  it('should click Submit button', () => {
    const element = $(pageRegisterSelectors.submitButton);
    element.click();
    browser.pause(2000);
  });
});

describe('Login page', () => {
  it('should have a correct title', () => {
    browser.url(URL_LOGIN);
    const actual = browser.getTitle();
    const expected = pageLogin.title;
    expect(actual).equal(expected);
  });

  it('should have a correct text', () => {
    const actual = $('h1').getText();
    const expected = pageLogin.h1;
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
    browser.pause(2000);
  });
});

describe('Confirmation register page', () => {
  it('should have a correct title', () => {
    const actual = $('h1').getText();
    const expected = pageConfirmation.h1;
    expect(actual).equal(expected);
    browser.pause(2000);
  });
});