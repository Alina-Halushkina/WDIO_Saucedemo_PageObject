// import loginPage from '../../pages/login.page';
// import cartPage from "../../pages/cart.page.ts";
// import productsPage from "../../pages/products.page.ts";
//
// describe('Products tests', async () => {
//     beforeEach(async () => {
//         await loginPage.open();
//         await loginPage.login('standard_user', 'secret_sauce');
//     });
//
//     afterEach(async () => {
//         await browser.execute('window.localStorage.clear(); window.sessionStorage.clear();');
//     });
//
//
//     it('Check cart', async () => {
//         await productsPage.clickAddToCartButton('Sauce Labs Backpack');
//         await cartPage.navigation.openCart();
//         await expect(await cartPage.cartItems.length).toEqual(1);
//         await expect(await cartPage.cartItemName[0].getText()).toEqual('Sauce Labs Backpack');
//         await expect(await cartPage.cartItemPrice[0].getText()).toEqual('$29.99');
//         await expect(await cartPage.cartRemoveButton[0].isDisplayed());
//     });
//
//
//     it('Check cart 2 items', async () => {
//         await productsPage.clickAddToCartButton('Sauce Labs Backpack');
//         await productsPage.clickAddToCartButton('Sauce Labs Bike Light');
//         await cartPage.navigation.openCart();
//         await expect(await cartPage.cartItems.length).toEqual(2);
//         await expect(await cartPage.cartItemName[0].getText()).toEqual('Sauce Labs Backpack');
//         await expect(await cartPage.cartItemPrice[0].getText()).toEqual('$29.99');
//         await expect(await cartPage.cartRemoveButton[0].isDisplayed());
//         await expect(await cartPage.cartItemName[1].getText()).toEqual('Sauce Labs Bike Light');
//         await expect(await cartPage.cartItemPrice[1].getText()).toEqual('$9.99');
//         await expect(await cartPage.cartRemoveButton[1].isDisplayed());
//     });
//
//     it('Remove from cart', async () => {
//         await productsPage.clickAddToCartButton('Sauce Labs Backpack');
//         await cartPage.navigation.openCart();
//         await cartPage.clickRemoveButton('Sauce Labs Backpack');
//         await expect(await cartPage.cartItems.length).toEqual(0);
//     });
//
//     it('Remove from cart 2 items', async () => {
//         await productsPage.clickAddToCartButton('Sauce Labs Backpack');
//         await productsPage.clickAddToCartButton('Sauce Labs Bike Light');
//         await cartPage.navigation.openCart();
//         await cartPage.clickRemoveButton('Sauce Labs Backpack');
//         await expect(await cartPage.cartItems.length).toEqual(1);
//         await expect(await cartPage.cartItemName[0].getText()).toEqual('Sauce Labs Bike Light');
//         await expect(await cartPage.cartItemPrice[0].getText()).toEqual('$9.99');
//         await expect(await cartPage.cartRemoveButton[0].isDisplayed());
//     });
//
//     it('Go to checkout', async () => {
//         await productsPage.clickAddToCartButton('Sauce Labs Backpack');
//         await cartPage.navigation.openCart();
//         await cartPage.clickCheckoutButton();
//         await expect(await $('#checkout_info_container').isDisplayed()).toEqual(true);
//     });
//
// })