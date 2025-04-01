exports.RegisterPage = class RegisterPage {
    constructor(page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'User Name' });
        this.email = page.getByRole('textbox', { name: 'Email' });
        this.password = page.getByRole('textbox', { name: 'Password Confirm your password' });
        this.confirmPwd = page.getByRole('textbox', { name: 'Enter your password...' });
        this.registerBtn = page.getByRole('button', { name: 'Sign Up' });
        this.error = page.locator('#flash');
    }

    async enterUsername(username) {
        await this.username.fill(username);
    }
    async enterRegistrationEmail(email) {
        await this.email.click();
        await this.email.fill(email);
    }
    async enterRegistrationPwd(pwd) {
        await this.password.click();
        await this.password.fill(pwd);
    }
    async confirmRegistrationPwd(confirmPwd) {
        await this.confirmPwd.click();
        await this.confirmPwd.fill(confirmPwd);
    }
    async clickSignUpBtn() {

        await this.registerBtn.click();
    }
    async completeRegistrationForm(username, email, pwd, confirmPwd) {
        await this.enterUsername(username);
        await this.enterRegistrationEmail(email);
        await this.enterRegistrationPwd(pwd);
        await this.confirmRegistrationPwd(confirmPwd);
        await this.clickSignUpBtn();
    }
}
