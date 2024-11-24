import {BasePage} from "./base.page.ts";
import Navigation from "../components/navigation.component.ts";

class ItemPage extends BasePage {
    constructor(public readonly navigation: Navigation) {
        super();
    }

    protected getUrl(): string {
        return "https://www.saucedemo.com/inventory-item.html?id=4";
    }

    get itemName() {
        return $('div[data-test=\'inventory-item-name\']')
    }

    get itemDescription() {
        return $('div[data-test=\'inventory-item-desc\']')
    }

    get itemPrice() {
        return $('div[data-test=\'inventory-item-price\']')
    }

    get addToCartButton() {
        return $('#add-to-cart')
    }

    get removeButton() {
        return $('#remove')
    }

    async clickAddToCartButton() {
        await this.addToCartButton.click();
    }

    async clickRemoveButton() {
        await this.removeButton.click();
    }
}

export default new ItemPage(new Navigation());