import {BasePage} from "./base.page.ts";
import Navigation from "../components/navigation.component.ts";

class CartPage extends BasePage {
    constructor(public readonly navigation: Navigation) {
        super();
    }

    protected getUrl(): string {
        return "https://www.saucedemo.com/cart.html";
    }
}

export default new CartPage(new Navigation());