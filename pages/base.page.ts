import { Key } from 'webdriverio'

export abstract class BasePage {

    protected abstract getUrl(): string;

    async open() {
        await browser.url(this.getUrl());
    }

    async pressEnterKey() {
        await browser.keys(Key.Enter);
    }
}