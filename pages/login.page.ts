import {BasePage} from "./base.page.ts";

class LoginPage extends BasePage {

    protected getUrl(): string {
        return 'https://www.saucedemo.com/';
    }

    get usernameInput() { return $('#user-name') };

    get passwordInput() { return $('#password') };

    get loginButton() { return $('#login-button') };

    get errorMessage() { return $('div.error-message-container') };

    async setUsername(username: string): Promise<void> {
        await this.usernameInput.setValue(username);
    }

    async setPassword(password: string) {
        await this.passwordInput.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}

export default new LoginPage();