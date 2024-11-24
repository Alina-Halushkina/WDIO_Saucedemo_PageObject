import loginPage from '../../pages/login.page';
import productsPage from "../../pages/products.page.ts";
import {password, username} from "../../config.ts";


describe('Login tests', async () => {
    beforeEach(async () => {
        await loginPage.open();
    });

    it('Positive login test', async () => {
        await loginPage.login(username, password);
        await expect(productsPage.navigation.cartIcon).toBeDisplayed();
        await expect(productsPage.navigation.menuIcon).toBeDisplayed();
    });

    it('Negative login test with no username', async () => {
        await loginPage.login('', password);
        await expect(loginPage.loginButton).toBeDisplayed();
        await expect(loginPage.errorMessage).toBeDisplayed();
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required');
    });

    it('Negative login test with no password', async () => {
        await loginPage.login(username, '');
        await expect(loginPage.loginButton).toBeDisplayed();
        await expect(loginPage.errorMessage).toBeDisplayed();
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Password is required');
    });

    it('Negative login test with incorrect username', async () => {
        await loginPage.login('1', password);
        await expect(loginPage.loginButton).toBeDisplayed();
        await expect(loginPage.errorMessage).toBeDisplayed();
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('Negative login test with incorrect password', async () => {
        await loginPage.login(username, '1');
        await expect(loginPage.loginButton).toBeDisplayed();
        await expect(loginPage.errorMessage).toBeDisplayed();
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });
});