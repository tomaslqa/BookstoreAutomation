exports.LogInPage = class LogInPage {
    constructor(page) {
        this.page = page;
        this.emailField = page.getByRole('textbox', { name: 'Email' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.signInBtn = page.getByRole('button', { name: 'Sign In' });
        this.signUpBtn = page.getByRole('link', { name: 'Sign Up!' });
        this.profile = page.getByTestId('navbarDropdown');
        this.logout = page.getByRole('link', { name: 'Log Out' });
    }

    async clickSignUpBtn() {
        await this.signUpBtn.click();
    }
    async enterEmail(email) {
        await this.emailField.click();
        await this.emailField.fill(email);
    }
    async enterpassword(pwd) {
        await this.passwordField.click();
        await this.passwordField.fill(pwd);
    }
    async clickSignInBtn() {
        await this.signInBtn.click();
    }
    async loginWithCredentials(email, pwd) {
        await this.enterEmail(email);
        await this.enterpassword(pwd);
        await this.clickSignInBtn();
    }
}
