import {test, expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import * as data from "../data/testData.json"

test.describe('Login Test', () => {

  let loginPage: LoginPage;

  test.beforeEach( async ({page}) => {
    await page.goto("/");
    loginPage = new LoginPage(page);
  })

  test('should login successfully', async ({page}) => {
    await loginPage.login(data.validUser.username,data.validUser.password)
    expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  })
  
})



