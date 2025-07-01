import {Page, expect} from '@playwright/test';

export class SignupPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyAccountInfoVisible() {
        await expect(this.page.getByText('Enter Account Information')).toBeVisible();
    }

    async selectTitle(title: string) {
        if (title === 'Mr.') {
            await this.page.getByRole('radio', {name: 'Mr.' }).check();
        } else if (title === 'Mrs.') {
            await this.page.getByRole('radio', {name: 'Mrs.' }).check();
        }
    }

    async verifyName(name: string) {
        await expect(this.page.getByRole('textbox', {name: 'Name *', exact: true })).toHaveValue(name);
    }

    async verifyEmail(email: string) {
        await expect(this.page.getByRole('textbox', {name: 'Email *' })).toHaveValue(email);
    }

    async inputPassword(password: string) {
        await this.page.getByRole('textbox', {name: 'Password *' }).fill(password);
    }

    async selectDayOfBirth(day: string) {
        await this.page.locator('#days').selectOption(day);
    }

    async selectMonthOfBirth(month: string) {
        await this.page.locator('#months').selectOption(month);
    }

    async selectYearOfBirth(year: string) {
        await this.page.locator('#years').selectOption(year);
    }

    async checkNewsletter() {
        await this.page.getByRole('checkbox', {name: 'Sign up for our newsletter!' }).check();
    }

    async checkOffers() {
        await this.page.getByRole('checkbox', {name: 'Receive special offers from' }).check();
    }

    async inputFirstName(firstName: string) {
        await this.page.getByRole('textbox', {name: 'First name *' }).fill(firstName);
    }

    async inputLastName(lastName: string) {
        await this.page.getByRole('textbox', {name: 'Last name *' }).fill(lastName);
    }

    async inputCompany(company: string) {
        await this.page.getByRole('textbox', {name: 'Company', exact: true }).fill(company);
    }

    async inputAddress1(address1: string) {
        await this.page.getByRole('textbox', {name: 'Address * (Street address, P.' }).fill(address1);
    }

    async inputAddress2(address2: string) {
        await this.page.getByRole('textbox', {name: 'Address 2' }).fill(address2);
    }

    async selectCountry(country: string) {
        await this.page.getByLabel('Country *').selectOption(country);
    }

    async inputState(state: string) {
        await this.page.getByRole('textbox', {name: 'State *' }).fill(state);
    }

    async inputCity(city: string) {
        await this.page.getByRole('textbox', {name: 'City * Zipcode *' }).fill(city);
    }

    async inputZipcode(zipcode: string) {
        await this.page.locator('#zipcode').fill(zipcode);
    }

    async inputMobileNumber(mobileNumber: string) {
        await this.page.getByRole('textbox', {name: 'Mobile Number *' }).fill(mobileNumber);
    }

    async clickCreateAccountButton() {
        await this.page.getByRole('button', {name: 'Create Account' }).click();
    }

    async verifyCreateAccountSuccess() {
          await expect(this.page.getByText('Account Created!')).toBeVisible();
    }

    async clickContinueButton() {
        await this.page.getByRole('link', {name: 'Continue' }).click();
    }

}