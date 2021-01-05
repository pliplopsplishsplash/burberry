const Credentials = require('../../../data/credentials.json');
const LoginPage = require('../../../page_object/login/login-page');
const { expect } = require('chai');

describe('Login', () => {
    it('Should be able to login BURBERRY-1', () => {
        // Navigate to home page
        browser.url('./');

        // Login
        LoginPage.login(Credentials.userLogin.email, Credentials.userLogin.password,);

        // Verify user landed on dashboard page
        //DashboardPage.usernameLbl.waitForDisplayed();
    })

    it('Should be able to login BERBERRY-2', () => {
        // Navigate to home page
        browser.url('./');

        // Login
        LoginPage.login(Credentials.userLogin.email, Credentials.userLogin.password,);

        // Verify user landed on dashboard page
        //DashboardPage.usernameLbl.waitForDisplayed();

        // Click signOut button
        LoginPage.signOutLnk.click();

        //Verify user is landed on the Login page
        LoginPage.loginLnk.waitForDisplayed();
    })

    // it('Should not be able to login with incorrect password BURBERRY-3', () => {
    //     // Navigate to home page
    //     browser.url('./');

    //     // Login
    //     LoginPage.login(Credentials.userLogin.email,'111',)

    //     //Check the PopUp EUM is shown
    //     browser.waitUntil(() => {
    //         return Homepage.endUserMessageLnk.getText() === 'Username and password did not match';
    //     }, 10000, '"Username and password did not match" message did not show up');

    //     //Verify the User is still on the Login page
    //     LoginPage.loginLnk.waitForDisplayed();  
    // })
})