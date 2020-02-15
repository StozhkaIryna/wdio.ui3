const selectors = {
    title : 'title',
    h1 : 'h1',
    submitButton : 'form button[type="submit"]',
    emailInput : 'form input[name="email"]',
    passwordInput: 'form input[name="password"]',
    diaryLink: '[qa="diary-link"]',
    courseLink: '//a[contains(text(),\'Courses\')]',
    userPageH1: '//h1',
    createDayRepButton: '//a[@class=\'btn btn-secondary\']',
    createNewCourseButton: '//a[@class=\'btn btn-primary\']',
    checkBox: {
        help: '//input[@id=\'input-0\']',
        lectures: '//input[@id=\'input-3\']',
        recruiter: '//input[@id=\'input-8\']'
    },
    moralDropDown: '//select[@name=\'morale\']',
    hours: '//input[@name=\'hours\']',
    description: '//textarea[@name=\'description\']',
    reportConfirm: '//div[@class=\'container\']//div[3]//div[2]',
    courseNameBox: '//input[@name=\'name\']'
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
    englishLevelInput : 'form select[name="englishLevel"]'

};

module.exports = { pageRegisterSelectors, selectors };