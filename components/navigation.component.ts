export default class Navigation {
    get cartIcon() {
        return $('a.shopping_cart_link')
    };

    get menuIcon() {
        return $('#react-burger-menu-btn')
    };

    get cartItemsCount() {
        return $('span.shopping_cart_badge')
    }

    get logoutButton() {
        return $('#logout_sidebar_link')
    }

    async openCart() {
        await this.cartIcon.click();
    }
}