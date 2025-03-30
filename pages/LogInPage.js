exports.LogInPage = class LogInPage {
    constructor(page) {
        this.page = page;
        this.emailField = page.getByRole('textbox', { name: 'Email' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.signInBtn = page.getByRole('button', { name: 'Sign In' });
        this.signUpBtn = page.getByRole('link', { name: 'Sign Up!' });
        this.profile = page.getByRole('link', { name: 'Profile' });
        this.logout = page.getByRole('link', { name: 'Log Out' });
    }

    async clickSignUpBtn() {
        await this.signUpBtn.click();
    }
    async enterEmail(email) {
        await this.emailField.sendKeys(email);
    }
    async enterpassword(pwd) {
        await this.searchField.sendKeys(pwd);
    }
    async clickSignInBtn() {
        await this.signInBtn.click();
    }
    async loginWithCredentials(email, pwd) {
        enterEmail(email);
        enterpassword(pwd);
        clickSignInBtn();
    }
}
