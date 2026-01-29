const { locator } = require("../fixtures/locators")

export const contactUsForm = (page) => {
    
    const { 
        name,
        email,
        subject,
        message,
     } = locator.contactus

    const fillDataContactUs = async ({
        name: fillName,
        email: fillEmail,
        subject: fillSubject,
        message: fillMessage
    }) => {
        await page.locator(name).fill(fillName)
        await page.locator(email).fill(fillEmail)
        await page.locator(subject).fill(fillSubject)
        await page.locator(message).click()
        await page.locator(message).fill(fillMessage)
    }

    return {
        fillDataContactUs
    }
}