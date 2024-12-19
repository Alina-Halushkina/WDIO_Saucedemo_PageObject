import {BasePage} from "./base.page.ts";
import Navigation from "../components/navigation.component.ts";

class CartPage extends BasePage {
    constructor(public readonly navigation: Navigation) {
        super();
    }

    protected getUrl(): string {
        return "https://www.saucedemo.com/cart.html";
    }

    get cartItems() {
        return $$('div.cart_item')
    }

    get cartItemName() {
        return $$('div.inventory_item_name')
    }

    get cartItemPrice() {
        return $$('div.inventory_item_price')
    }
    get cartRemoveButton() {
        return $$('button[id^=remove]')
    }

    get cartContinueShoppingButton() {
        return $('#continue-shopping')
    }

    get cartCheckoutButton() {
        return $('#checkout')
    }

    get checkoutInfo() {
      return $('#checkout_info_container');
    }

    async clickRemoveButton(itemName: string) {
        const cartItem = await this.getCartItemByName(itemName);
        await cartItem.$('button[id^=remove]').click();
    }

    private async getCartItemByName(itemName: string) {
        return this.cartItems.find(async (cartItem) => {
            return (await cartItem.$('div.inventory_item_name').getText()) === itemName
        });
    }

    async clickCheckoutButton() {
        await this.cartCheckoutButton.click();
    }
}

export default new CartPage(new Navigation());