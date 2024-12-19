import loginPage from '../../pages/login.page';
import productsPage from "../../pages/products.page.ts";
import {password, username} from "../../config.ts";

describe('Products tests', async () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login(username, password);
    });

    afterEach(async () => {
      await productsPage.clearSessionStorage();
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

   it('Remove from cart', async () => {
       await productsPage.clickAddToCartButton('Sauce Labs Backpack');
       await productsPage.clickRemoveButton('Sauce Labs Backpack');
       await expect(await productsPage.addToCartButton('Sauce Labs Backpack')).toBeExisting();
   });
});