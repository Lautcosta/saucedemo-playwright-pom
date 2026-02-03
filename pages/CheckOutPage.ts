import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckOutPage extends BasePage {

    readonly name: Locator;
    readonly lastName: Locator;
    readonly psCode: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;

    constructor (page: Page) {
        super(page)
        this.name = this.page.getByRole('textbox',{name: 'First Name'})
        this.lastName = this.page.getByRole('textbox',{name: 'Last Name'})
        this.psCode = this.page.getByRole('textbox',{name: 'Zip/Postal Code'})
        this.continueButton = this.page.getByRole('button',{name:'Continue'})
        this.finishButton = this.page.getByRole('button',{name:'Finish'})
    }

    async fillData (name: string, lastName:string, psCode:string) {
        await this.name.fill(name);
        await this.lastName.fill(lastName);
        await this.psCode.fill(psCode);
    }

    async pressContinue() {
        await this.continueButton.click();
    }

    async pressFinish() {
        await this.finishButton.click();
    }
}