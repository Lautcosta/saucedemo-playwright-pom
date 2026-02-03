import {Page, Locator} from "@playwright/test"
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage {

    readonly productItems: Locator;
    readonly cartButton: Locator;

    constructor (page:Page) {
        super(page)
        this.productItems = page.locator('.inventory_item')
        this.cartButton = page.locator('.shopping_cart_link')
    }

    async choseItem (title: string) {

        const product = this.productItems.filter({hasText: title});

        await product.getByRole('button', { name: 'Add to cart' }).click()
    }

    async checkCart () {
        await this.cartButton.click()
    }

}