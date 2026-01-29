const { locator } = require("../fixtures/locators")

export const navbar = (page) => {

    const { loginMenu } = locator.login
    const { deleteAccountMenu } = locator.deleteAccount
    const { logoutMenu } = locator.logout
    const { contactUsMenu } = locator.contactus
    const { testCaseMenu } = locator.testCase
    const { productMenu } = locator.product
    

    const gotoLoginMenu =  async() => {
        await page.locator(loginMenu).click()
    }
    const gotoLogout =  async() => {
        await page.locator(logoutMenu).click()
    }

    const gotoDeleteAccountMenu =  async() => {
        await page.locator(deleteAccountMenu).click()
    }

    const gotoContactUsMenu =  async() => {
        await page.locator(contactUsMenu).click()
    }

    const gotoTestCaseMenu = async () => {
        await page.locator(testCaseMenu).click()
    }

    const gotoProductMenu = async () => {
        await page.locator(productMenu).click()
    }

    return {
        gotoLoginMenu,
        gotoDeleteAccountMenu,
        gotoLogout,
        gotoContactUsMenu,
        gotoTestCaseMenu,
        gotoProductMenu
    }
}