import {BasePage} from "./base.page.ts";
import Navigation from "../components/navigation.component.ts";

class ItemPage extends BasePage {
    constructor(public readonly navigation: Navigation) {
        super();
    }

    get addToCartButton() {
        return $('button[id^=add-to-cart]')
    };

    protected getUrl(): string {
        return "https://www.saucedemo.com/inventory-item.html";
    }
}

export default new ItemPage(new Navigation());