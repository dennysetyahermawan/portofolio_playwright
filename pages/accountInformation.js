const { locator } = require("../fixtures/locators")

export const accountInformation = (page) => {
    
    const {
        title,
        password,
        dateOfBirthDay,
        dateOfBirthMonth,
        dateOfBirthYear,
        newsLetter,
        receive
    } = locator.accountInformation

    const datasAccountInformation = async ({
        password: passwords,
        day: days,
        month: months,
        year: years
    }) => {
        await page.locator(title).check();
        await page.locator(password).fill(passwords)
        await page.locator(dateOfBirthDay).selectOption(days)
        await page.locator(dateOfBirthMonth).selectOption(months)
        await page.locator(dateOfBirthYear).selectOption(years)
        await page.locator(newsLetter).check()
        await page.locator(receive).check()
    }

    return {
        datasAccountInformation
    }
}