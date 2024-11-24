import loginPage from '../../pages/login.page';
import cartPage from "../../pages/cart.page.ts";
import productsPage from "../../pages/products.page.ts";
import checkoutStep1Page from "../../pages/checkout_step_1.page.ts";

describe('Products tests', async () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
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
        await expect(await browser.getUrl()).toEqual('https://www.saucedemo.com/checkout-step-two.html');
    });

})