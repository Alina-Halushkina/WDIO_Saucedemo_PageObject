import loginPage from '../../pages/login.page';
import cartPage from "../../pages/cart.page.ts";
import productsPage from "../../pages/products.page.ts";
import checkoutStep1Page from "../../pages/checkout_step_1.page.ts";
import checkout_step_2Page from "../../pages/checkout_step_2.page.ts";
import checkout_completePage from "../../pages/checkout_complete.page.ts";
import {password, username} from "../../config.ts";

describe('Checkout tests', async () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login(username, password);
    });

    afterEach(async () => {
        await browser.execute('window.localStorage.clear(); window.sessionStorage.clear();');
    });

    it('Checkout', async () => {
        await productsPage.clickAddToCartButton('Sauce Labs Backpack');
        await cartPage.navigation.openCart();
        await cartPage.clickCheckoutButton();
        await checkoutStep1Page.fillCheckoutForm('Ivan', 'Ivanov', '12345');
        await checkoutStep1Page.clickContinueButton();
        await expect(await checkout_step_2Page.finishButton.isDisplayed()).toBe(true);
        await checkout_step_2Page.clickFinishButton();
        await expect(await checkout_completePage.completeHeader.getText()).toEqual('Thank you for your order!');
        await expect(await checkout_completePage.backHomeButton.isDisplayed()).toBe(true);
    });

    it('Should not checkout', async () => {
        await productsPage.clickAddToCartButton('Sauce Labs Backpack');
        await cartPage.navigation.openCart();
        await cartPage.clickCheckoutButton();
        await checkoutStep1Page.clickContinueButton();
        await expect(await checkout_step_2Page.finishButton.isDisplayed()).toBe(false);
    });
})