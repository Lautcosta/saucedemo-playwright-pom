import {Page, Locator} from "@playwright/test"
import { BasePage } from "./BasePage"

export class LoginPage extends BasePage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page)
        this.username = this.page.getByRole("textbox",{name: 'Username'})
        this.password = this.page.getByRole("textbox",{name:'Password'})
        this.loginButton = this.page.getByRole("button",{name:'Login'})
    }

    async login (user:string ,pass: string) {
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginButton.click()
    }

}