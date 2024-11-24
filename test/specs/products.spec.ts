import loginPage from '../../pages/login.page';
import productsPage from "../../pages/products.page.ts";

describe('Products tests', async () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    afterEach(async () => {
        await browser.execute('window.localStorage.clear(); window.sessionStorage.clear();');
    });

   it('Check price and description', async () => {
       const productName = 'Sauce Labs Backpack';
       await expect(await productsPage.getItemPrice(productName)).toEqual('$29.99');
       await expect(await productsPage.getItemDescription(productName)).toEqual('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
   });

   it('Add to cart', async () => {
        await productsPage.clickAddToCartButton('Sauce Labs Backpack');
        await expect(await productsPage.getCartItemsCount()).toEqual("1");
    });

   it('Add to cart 2 items', async () => {
       await productsPage.clickAddToCartButton('Sauce Labs Bolt T-Shirt');
       await productsPage.clickAddToCartButton('Sauce Labs Bike Light');
       await expect(await productsPage.getCartItemsCount()).toEqual("2");
   });
});