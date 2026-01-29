const { locator } = require("../fixtures/locators")

export const login = (page) => {

    const {
        nameSignup,
        emailSignup,
        buttonSignup,
        emailLogin,
        passwordLogin,
        buttonLogin
    } = locator.login

    const dataSignup = async ({
        name: dataName,
        email: dataEmail
    }) => {
        await page.locator(nameSignup).fill(dataName)
        await page.locator(emailSignup).fill(dataEmail)
        await page.locator(buttonSignup).click()
    }

    const dataLogin = async ({
        email: dataEmail,
        password: dataPassword
    }) => {
        await page.locator(emailLogin).fill(dataEmail)
        await page.locator(passwordLogin).fill(dataPassword)
        await page.locator(buttonLogin).click()
    }

    return {
        dataSignup,
        dataLogin
    }
}