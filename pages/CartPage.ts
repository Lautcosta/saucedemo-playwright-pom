import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
    
    readonly checkOutButton : Locator;

    constructor(page: Page) {
        super(page)
        this.checkOutButton = this.page.getByRole("button", {name:"Checkout"})
    }

    async pressCheckOut () {
        await this.checkOutButton.click()
    }
}