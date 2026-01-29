

export const locator = {
    home : 'a[href="/"]',

    continueButton: '[data-qa="continue-button"]',

    uploadFile: 'input[name="upload_file"]',

    login: {
        loginMenu: 'a[href="/login"]',
        nameSignup: '[data-qa="signup-name"]',
        emailSignup: '[data-qa="signup-email"]',
        buttonSignup: '[data-qa="signup-button"]',
        emailLogin: '[data-qa="login-email"]',
        passwordLogin: '[data-qa="login-password"]',
        buttonLogin: '[data-qa="login-button"]'
        
    },

    logout: {
        logoutMenu: 'a[href="/logout"]'  
    },

    contactus: {
        contactUsMenu: 'a[href="/contact_us"]',
        name: '[data-qa="name"]',
        email: '[data-qa="email"]',
        subject: '[data-qa="subject"]',
        message: '[data-qa="message"]',
        buttonSubmit: '[data-qa="submit-button"]',
        buttonHome: '.btn-success',
        textSucces: "#success-subscribe"
    },

    accountInformation: {
        title: '[data-qa="title"] input#id_gender1',
        password: '[data-qa="password"]',
        dateOfBirthDay: '[data-qa="days"]',
        dateOfBirthMonth: '[data-qa="months"]',
        dateOfBirthYear: '[data-qa="years"]',
        newsLetter: '#newsletter',
        receive: '#optin'
    },
    addressInformation: {
        firstName: '[data-qa="first_name"]',
        lastName: '[data-qa="last_name"]',
        company: '[data-qa="company"]',
        address1: '[data-qa="address"]',
        address2: '[data-qa="address2"]',
        country: '[data-qa="country"]',
        state: '[data-qa="state"]',
        city: '[data-qa="city"]',
        zipcode: '[data-qa="zipcode"]',
        mobileNumber: '[data-qa="mobile_number"]',
        buttonCreateAccount: '[data-qa="create-account"]'
    },
    deleteAccount: {
        deleteAccountMenu: 'a[href="/delete_account"]'
    },
    testCase: {
        testCaseMenu: '#header a[href="/test_cases"]'
    },
    product: {
        productMenu: 'a[href="/products"]',
        viewProduct: '.choose',
        detailProduct: '.product-information',
        searchProduct: '#search_product',
        buttonSearchProduct: '#submit_search',
        searchTitle: '.features_items'
    }
}