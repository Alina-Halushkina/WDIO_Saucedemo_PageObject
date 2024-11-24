import {BasePage} from "./base.page.ts";
import Navigation from "../components/navigation.component.ts";

class CheckoutStep1Page extends BasePage {
    constructor(public readonly navigation: Navigation) {
        super();
    }

    protected getUrl(): string {
        return "https://www.saucedemo.com/checkout-step-one.html";
    }

    get firstNameInput() {
        return $('#first-name')
    }

    get lastNameInput() {
        return $('#last-name')
    }

    get postalCodeInput() {
        return $('#postal-code')
    }

    get continueButton() {
        return $('#continue')
    }

    async fillCheckoutForm(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }
}
export default new CheckoutStep1Page(new Navigation());