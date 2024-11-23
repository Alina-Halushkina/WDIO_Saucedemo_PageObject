import loginPage from '../../pages/login.page';
import productsPage from "../../pages/products.page.ts";

describe('Login tests', async () => {
    beforeEach(async () => {
        await loginPage.open();
    });

    it('Positive login test', async () => {
        await loginPage.setUsername('standard_user');
        await loginPage.setPassword('secret_sauce');
        await loginPage.clickLoginButton();
        await expect(productsPage.navigation.cartIcon).toBeDisplayed();
        await expect(productsPage.navigation.menuIcon).toBeDisplayed();
    });

    it('Negative login test with no username', async () => {
        await loginPage.setUsername('');
        await loginPage.setPassword('secret_sauce');
        await loginPage.clickLoginButton();
        await expect(loginPage.loginButton).toBeDisplayed();
        await expect(loginPage.errorMessage).toBeDisplayed();
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required');
    });

    it('Negative login test with no password', async () => {
        await loginPage.setUsername('standard_user');
        await loginPage.setPassword('');
        await loginPage.clickLoginButton();
        await expect(loginPage.loginButton).toBeDisplayed();
        await expect(loginPage.errorMessage).toBeDisplayed();
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Password is required');
    });

    it('Negative login test with incorrect username', async () => {
        await loginPage.setUsername('1');
        await loginPage.setPassword('secret_sauce');
        await loginPage.clickLoginButton();
        await expect(loginPage.loginButton).toBeDisplayed();
        await expect(loginPage.errorMessage).toBeDisplayed();
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });


    it('Negative login test with incorrect password', async () => {
        await loginPage.setUsername('standard_user');
        await loginPage.setPassword('1');
        await loginPage.clickLoginButton();
        await expect(loginPage.loginButton).toBeDisplayed();
        await expect(loginPage.errorMessage).toBeDisplayed();
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });
});