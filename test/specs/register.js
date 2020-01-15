
const assert = require('assert')

describe('Register page', () => {
    it('should have the right title', () => {
        browser.url('https://stage.pasv.us/user/register')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Progress Monitor')
    })

    it('should have a correct title', () => {
        const actualH1text = $('h1').getText();
        const expectedH1text = 'User Register';
        assert (actualH1text, expectedH1text);
    })

});
