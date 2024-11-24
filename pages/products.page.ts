import {BasePage} from "./base.page.ts";
import Navigation from "../components/navigation.component.ts";

class ProductsPage extends BasePage {
    constructor(public readonly navigation: Navigation) {
        super();
    }
    get itemContainers() {return $$('div.inventory_item')}

    protected getUrl(): string {
        return "https://www.saucedemo.com/inventory.html";
    }
    async clickAddToCartButton(itemName: string) {
        const itemContainer = await this.getItemContainerByName(itemName);
        await itemContainer.$('button[id^=add-to-cart]').click();
    }

    async clickRemoveButton(itemName: string) {
        const itemContainer = await this.getItemContainerByName(itemName);
        await itemContainer.$('button[id^=remove-from-cart]').click();
    }

    async getItemPrice(itemName: string) {
        const itemContainer = await this.getItemContainerByName(itemName);
        return itemContainer.$('div.inventory_item_price').getText();
    }

    async getItemDescription(itemName: string) {
        const itemContainer = await this.getItemContainerByName(itemName);
        return itemContainer.$('div.inventory_item_desc').getText();
    }

    private async getItemContainerByName(itemName: string): Promise<ChainablePromiseElement> {
        return this.itemContainers.find(async (itemContainer) => {
            return (await itemContainer.$('div.inventory_item_name').getText()) === itemName
        });
    }

    async getCartItemsCount() {
        return this.navigation.CartItemsCount.getText();
    }
}

export default new ProductsPage(new Navigation());