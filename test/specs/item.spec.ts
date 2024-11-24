import loginPage from '../../pages/login.page';
import productsPage from "../../pages/products.page.ts";
import itemPage from "../../pages/item.page.ts";

describe('Item tests', async () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    afterEach(async () => {
        await browser.execute('window.localStorage.clear(); window.sessionStorage.clear();');
    });
    it('Add to cart in item page', async() => {
        await productsPage.clickByName('Sauce Labs Backpack');
        console.log(await itemPage.itemName.getText());
        await expect(await itemPage.itemName.getText()).toEqual('Sauce Labs Backpack');
        await expect(await itemPage.itemDescription.isDisplayed());
        await expect(await itemPage.itemPrice.getText()).toEqual('$29.99');
        await itemPage.clickAddToCartButton();
        await expect(await itemPage.removeButton.isDisplayed());
        }
    )
});