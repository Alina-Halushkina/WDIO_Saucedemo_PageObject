import {BasePage} from "./base.page.ts";
import Navigation from "../components/navigation.component.ts";

class Checkout_completePage extends BasePage {
    constructor(public readonly navigation: Navigation) {
        super();
    }

    protected getUrl(): string {
        return "https://www.saucedemo.com/checkout-complete.html";
    }

    get backHomeButton() {
        return $('#back-to-products')
    }

    async clickBackHomeButton() {
        await this.backHomeButton.click();
    }

    get completeHeader() {
        return $('.complete-header')
    }
}
export default new Checkout_completePage(new Navigation());