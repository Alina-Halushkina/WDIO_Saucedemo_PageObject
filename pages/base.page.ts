export abstract class BasePage {

    protected abstract getUrl(): string;

    async open() {
        await browser.url(this.getUrl());
    }

    async clearSessionStorage() {
        await browser.execute('window.localStorage.clear(); window.sessionStorage.clear();');
    };
}