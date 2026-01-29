
const { locator } = require("../fixtures/locators")

export const addressInformation = (page) => {

    const {
        firstName,
        lastName,
        company,
        address1,
        address2,
        country,
        state,
        city,
        zipcode,
        mobileNumber,
        buttonCreateAccount
    } = locator.addressInformation
    
    const dataAddressInformation = async ({
        firstName: dataFirstName,
        lastName: dataLastName,
        company: dataCompany,
        address1: dataAddress1,
        address2: dataAddress2,
        country: dataCountry,
        state: dataState,
        city: dataCity,
        zipcode: dataZipcode,
        mobileNumber: dataMobileNumber
    }) => {
        await page.locator(firstName).fill(dataFirstName)
        await page.locator(lastName).fill(dataLastName)
        await page.locator(company).fill(dataCompany)
        await page.locator(address1).fill(dataAddress1)
        await page.locator(address2).fill(dataAddress2)
        await page.locator(country).selectOption(dataCountry)
        await page.locator(state).fill(dataState)
        await page.locator(city).fill(dataCity)
        await page.locator(zipcode).fill(dataZipcode)
        await page.locator(mobileNumber).fill(dataMobileNumber)
        await page.locator(buttonCreateAccount).click()
    }
    
    return {
        dataAddressInformation
    }
}