export abstract class BasePage {

    protected abstract getUrl(): string;

    async open() {
        await browser.url(this.getUrl());
    }
}