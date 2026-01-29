const { locator } =  require("../locators")

export const uploadFile = (page) => {
    
    const locators = locator

    const sendFile = async(file) => {
        await page.locator(locators.uploadFile).setInputFiles(file)
    }
    
    return {
        sendFile
    }
} 