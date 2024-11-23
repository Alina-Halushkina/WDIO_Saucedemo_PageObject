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
}

export default new ProductsPage(new Navigation());