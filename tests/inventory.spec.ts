import {test, expect} from "@playwright/test"
import { InventoryPage } from "../pages/InventoryPage"
import { LoginPage } from "../pages/LoginPage"
import { CartPage } from "../pages/CartPage"
import { CheckOutPage } from "../pages/CheckOutPage"
import * as data from "../data/testData.json"

test.describe('Complete purchase flow', () => {

    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;

    test.beforeEach( async ({page}) => {
        await page.goto("/");
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        await loginPage.login(data.validUser.username,data.validUser.password)
    } )

    test('should complete a purchase successfully', async ({page}) => {
        //seleccionar item y presionar carrito
        await inventoryPage.choseItem(data.products.mainItem);
        await inventoryPage.checkCart();
        //assertion
        await expect(page).toHaveURL("https://www.saucedemo.com/cart.html")

        //presionar boton de checkOut
        const cartPage = new CartPage(page);
        await cartPage.pressCheckOut()
        //assertion
        await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html")

        //llenar campos, presionar continuar y finalizar compra
        const checkOutPage = new CheckOutPage(page);
        await checkOutPage.fillData(data.InfoCheckOut.name,data.InfoCheckOut.lastName,data.InfoCheckOut.psCode);
        await checkOutPage.pressContinue();
        //assertion
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

        await checkOutPage.pressFinish();
        //assertion
        const successMessage = page.getByRole('heading', { name: 'Thank you for your order!' });
        await expect(successMessage).toBeVisible();
    })

})
