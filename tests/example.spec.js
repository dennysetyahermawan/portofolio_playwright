// @ts-check
import { test, expect } from '@playwright/test';
const { login } = require("../pages/login")
const { locator } = require("../fixtures/locators")
const { accountInformation } = require("../pages/accountInformation")
const { addressInformation } = require("../pages/addresInformation")
const { contactUsForm } = require("../pages/contactUsForm")
const { navbar } = require("../pages/navbar")
const { uploadFile } = require("../fixtures/helper/uploadFile")
const dataUser = require("../fixtures/datas/users.json")

test.describe('should first', () => { 

  test.beforeEach('should first', async ({ page }) => {
    await page.goto('https://automationexercise.com/', {
            waitUntil: 'commit',
            timeout: 60000 
        })
  })
  
  test('TC001 => Register User', async ({ page }) => { 

    const getLogin = login(page)
    const locators = locator
    const getAccountInformation = accountInformation(page)
    const getAddressInformation = addressInformation(page)
    const navbarMenu = navbar(page)
    
    await expect(page).toHaveURL('https://automationexercise.com/')
    await navbarMenu.gotoLoginMenu()
    await expect(page.getByText('New User Signup!')).toBeVisible()
    await getLogin.dataSignup({
     name: dataUser.validUser.name,
     email: dataUser.validUser.email
    })
    await expect(page.getByText('Enter Account Information')).toBeVisible()
    await getAccountInformation.datasAccountInformation({
      password: dataUser.validUser.password,
      day: dataUser.validUser.day,
      month: dataUser.validUser.month,
      year: dataUser.validUser.year
    })
    await getAddressInformation.dataAddressInformation({
      firstName: dataUser.validUser.firstName,
      lastName: dataUser.validUser.lastName,
      company: dataUser.validUser.company,
      address1: dataUser.validUser.address1,
      address2: dataUser.validUser.address2,
      country: dataUser.validUser.country,
      state: dataUser.validUser.state,
      city: dataUser.validUser.city,
      zipcode: dataUser.validUser.zipcode,
      mobileNumber: dataUser.validUser.mobileNumber
    })
    await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible()
    await page.locator(locators.continueButton).click()
    await expect(page.getByText('Logged in as')).toBeVisible()
    await navbarMenu.gotoDeleteAccountMenu()
    await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible()
    await page.locator(locators.continueButton).click()
  })

  test('TC002 => Login User with correct email and password', async ({ page }) => { 
    const navbarMenu = navbar(page)
    const getLogin = login(page)

    await expect(page).toHaveURL('https://automationexercise.com/')
    await navbarMenu.gotoLoginMenu()
    await expect(page.getByText("Login to your account")).toBeVisible()

    await getLogin.dataLogin({
      email: dataUser.registerUser.email,
      password: dataUser.registerUser.password
    })
    await expect(page.getByText(`Logged in as ${dataUser.registerUser.name}`)).toBeVisible()
  })
  
  test('TC003 => Login User with incorrect email and password', async ({ page }) => {
    const getLogin = login(page)
    const navbarMenu = navbar(page)

    await expect(page).toHaveURL('https://automationexercise.com/')
    await navbarMenu.gotoLoginMenu()
    
    await getLogin.dataLogin({
      email: dataUser.invalidUser.email,
      password: dataUser.invalidUser.password
    })
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible()
  })
  
  test('TC004 => Logout User', async ({ page }) => { 
    const getLogin = login(page)
    const navbarMenu = navbar(page)

    await expect(page).toHaveURL('https://automationexercise.com/')
    await navbarMenu.gotoLoginMenu()

    await getLogin.dataLogin({
      email: dataUser.registerUser.email,
      password: dataUser.registerUser.password
    })

    await navbarMenu.gotoLogout()
    await expect(page.getByText("Login to your account")).toBeVisible()
   })

  test('TC005 => Register User with existing email', async({page}) => { 
    const getLogin = login(page)
    const navbarMenu = navbar(page)

    await expect(page).toHaveURL('https://automationexercise.com/')
    await navbarMenu.gotoLoginMenu()
    await expect(page.getByText('New User Signup!')).toBeVisible()
    
    await getLogin.dataSignup({
     name: dataUser.registerUser.name,
     email: dataUser.registerUser.email
    })

    await expect(page.getByText("Email Address already exist!")).toBeVisible()
  })
  
  test('TC006 => Contact Us Form', async ({ page }) => { 
    const navbarMenu = navbar(page)
    const fileContactUs = uploadFile(page)
    const fillDataContactUs = contactUsForm(page)

    await expect(page).toHaveURL('https://automationexercise.com/')

    await navbarMenu.gotoContactUsMenu()
    await expect(page.getByText("GET IN TOUCH")).toBeVisible()

    await fillDataContactUs.fillDataContactUs({
      name: dataUser.contactUsData.name,
      email: dataUser.contactUsData.email,
      subject: dataUser.contactUsData.subject,
      message: dataUser.contactUsData.message
    })
    await fileContactUs.sendFile('fixtures/datas/managementKost.pdf')
    await page.waitForTimeout(1000)
    page.on('dialog', async dialog => {
      await dialog.accept()
    })
    page.locator(locator.contactus.buttonSubmit).click()
    await expect(page.locator(locator.contactus.textSucces)).toContainText('Success! Your details have been submitted successfully.')
    await page.locator(locator.contactus.buttonHome).click()
  })
  
  test('TC007 => Verify Test Cases Page', async ({ page }) => { 
    const navbarMenu = navbar(page)

    await expect(page).toHaveURL('https://automationexercise.com/')
    await navbarMenu.gotoTestCaseMenu()
    await expect(page).toHaveURL('https://automationexercise.com/test_cases')
  })
  
  test('TC008 => Verify All Products and product detail page', async({page}) => { 
    const navbarMenu = navbar(page)

    await navbarMenu.gotoProductMenu()
    await expect(page).toHaveURL('https://automationexercise.com/products')
    await page.locator(locator.product.viewProduct).nth(0).click()
    await expect(page.locator(locator.product.detailProduct)).toContainText("Blue Top")
    await expect(page.locator(locator.product.detailProduct)).toContainText("Category")
    await expect(page.locator(locator.product.detailProduct)).toContainText("Rs. 500")
    await expect(page.locator(locator.product.detailProduct)).toContainText("Availability")
    await expect(page.locator(locator.product.detailProduct)).toContainText("Condition")
    await expect(page.locator(locator.product.detailProduct)).toContainText("Brand")
  })
  
  test('TC009 => Search Product', async ({ page }) => { 
    const navbarMenu = navbar(page)

    await navbarMenu.gotoProductMenu()
    await expect(page).toHaveURL('https://automationexercise.com/products')
    await page.locator(locator.product.searchProduct).fill('Blue Top')
    await page.locator(locator.product.buttonSearchProduct).click()
    await page.waitForSelector(locator.product.searchTitle)
    await expect(page.locator(locator.product.searchTitle)).toContainText("Searched Products")
    await expect(page.locator(locator.product.searchTitle)).toContainText("Blue Top")
  })
  
  test('TC010 => Verify Subscription in home page', async ({ page }) => { 
    await expect(page).toHaveURL('https://automationexercise.com/')
    await page.locator("#footer").scrollIntoViewIfNeeded()
    await expect(page.locator("#footer")).toBeVisible()
    await page.locator("#susbscribe_email").fill("tes@gmail.com")
    await page.locator("#subscribe").click()
    await expect(page.locator("#footer")).toContainText("You have been successfully subscribed!")
   })

 })