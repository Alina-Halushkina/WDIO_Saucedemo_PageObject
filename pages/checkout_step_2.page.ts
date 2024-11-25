import {BasePage} from "./base.page.ts";
import Navigation from "../components/navigation.component.ts";

class CheckoutStepTwoPage extends BasePage {
    constructor(public readonly navigation: Navigation) {
        super();
    }

    protected getUrl(): string {
        return "https://www.saucedemo.com/checkout-step-two.html";
    }

    get finishButton() {
        return $('#finish')
    }

    async clickFinishButton() {
        await this.finishButton.click();
    }

    get inventoryItem() {
        return $('.inventory_item_name')
    }

    get inventoryItemPrice() {
        return $('.inventory_item_price')
    }

}
export default new CheckoutStepTwoPage(new Navigation());