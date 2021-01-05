"use strict";
const Homepage = require('../../page_object/homepage/homepage-page');
class Login {
    // Reusable selector getters that will help us to avoid selector duplicates
    get loginLnk() { return $('[type="submit"]'); }
    get brandLnk() {return $('[class="btn active"]');}
    get emailBrandTxt() {return $('[placeholder="email"]');}
    get passwordBrandTxt() {return $('[placeholder="password"]');}
    get signOutLnk() { return $('[class="navigation-element el-0"]'); }

    // Reusable selector for I am Brand button
    get iAmBrandBtn() { return $('span=Brand'); }

    /**
     * 
     * @param {*} email - user email
     * @param {*} password - user password
     * @param {*} portal - can be either brand or creator
     */
    login(email, password, portal) {
        // Open click on login button
        Homepage.loginLnk.waitForClickable();
        Homepage.loginLnk.click();

        if (portal === 'brand') {
            // Click on "I'm a Brand" button
            this.iAmBrandBtn.click();
        }

        // Type in username and password
        Homepage.emailTxt.waitForClickable();
        Homepage.emailTxt.setValue(email);
        Homepage.passwordTxt.setValue(password);

        // Click on login button
        this.loginLnk.waitForClickable();
        this.loginLnk.click();
    }
}
module.exports = new Login();