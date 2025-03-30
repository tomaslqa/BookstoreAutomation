exports.RegisterPage = class RegisterPage {
    constructor(page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'User Name' });
        this.email = page.getByRole('textbox', { name: 'Email' });
        this.password = page.getByRole('textbox', { name: 'password' });
        this.confirmPwd = page.getByRole('textbox', { name: 'password2' }).click();
        this.registerBtn= page.getByRole('button', { name: 'Sign Up' }).click();
    }

async enterUsername(username) {
    await this.username.sendKeys(username);
}
async enterRegistrationEmail(email) {
    await this.email.sendKeys(email);
}
async enterRegistrationPwd(pwd) {
    await this.password.sendKeys(pwd);
}
async confirmRegistrationPwd(confirmPwd) {
    await this.confirmPwd.sendKeys(confirmPwd);
}
async clickSigUpBtn() {
    await this.registerBtn.click();
}
async completeRegistrationForm(username, email, pwd, confirmPwd) {
    enterUsername(username);
    enterRegistrationEmail(email);
    enterRegistrationPwd(pwd);
    confirmRegistrationPwd(confirmPwd);
    clickSignUpBtn();
}
}
