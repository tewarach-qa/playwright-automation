import {Page} from '@playwright/test';
import {SignupPage} from '../pages/signupPage';
import {SignupOrLoginFeature} from '../features/signupOrLoginFeature';
import {HomePage} from '../pages/homePage';

export class SignupFeature {
    readonly page: Page;
    readonly signupPage: SignupPage;
    readonly signupOrLoginFeature: SignupOrLoginFeature;
    readonly homePage: HomePage;

    constructor(page: Page) {
        this.page = page;
        this.signupPage = new SignupPage(page);
        this.signupOrLoginFeature = new SignupOrLoginFeature(page);
        this.homePage = new HomePage(page); 
    }

    async selectDateOfBirth(day: string, month: string, year: string) {
        await this.page.locator('#days').selectOption(day);
        await this.page.locator('#months').selectOption(month);
        await this.page.locator('#years').selectOption(year);
    }

    async inputAccountInformation(data: {
        name: string;
        email: string;
        title: string;
        password: string;
        dateOfBirth: {
            day: string;
            month: string;
            year: string;
        };
    }) {
        await this.signupPage.verifyAccountInfoVisible();
        await this.signupPage.selectTitle(data.title);
        await this.signupPage.verifyName(data.name);
        await this.signupPage.verifyEmail(data.email);
        await this.signupPage.inputPassword(data.password);
        await this.selectDateOfBirth(
            data.dateOfBirth.day,
            data.dateOfBirth.month,
            data.dateOfBirth.year
        );
        await this.signupPage.checkNewsletter();
        await this.signupPage.checkOffers();
    }

    async inputAddressInformation(data: {
        firstName: string;
        lastName: string;
        company: string;
        address1: string;
        address2: string;
        country: string;
        state: string;
        city: string;
        zipcode: string;
        mobileNumber: string;
    }) {
        await this.signupPage.inputFirstName(data.firstName);
        await this.signupPage.inputLastName(data.lastName);
        await this.signupPage.inputCompany(data.company);
        await this.signupPage.inputAddress1(data.address1);
        await this.signupPage.inputAddress2(data.address2);
        await this.signupPage.selectCountry(data.country);
        await this.signupPage.inputState(data.state);
        await this.signupPage.inputCity(data.city);
        await this.signupPage.inputZipcode(data.zipcode);
        await this.signupPage.inputMobileNumber(data.mobileNumber);
    }

    async verifyCreateAccountSuccess() {
        await this.signupPage.clickCreateAccountButton();
        await this.signupPage.verifyCreateAccountSuccess();
        await this.signupPage.clickContinueButton();
    }

    async signupNewUser(data: {
        accountInfo: {
            name: string;
            email: string;
            title: string;
            password: string;
            dateOfBirth: {
                day: string;
                month: string;
                year: string;
            };
        };
        addressInfo: {
            firstName: string;
            lastName: string;
            company: string;
            address1: string;
            address2: string;
            country: string;
            state: string;
            city: string;
            zipcode: string;
            mobileNumber: string;
        };
    }) {
        await this.signupOrLoginFeature.navigateToSignupSection();
        await this.signupOrLoginFeature.inputSignupBasicInfo({
            name: data.accountInfo.name,
            email: data.accountInfo.email
        });
        await this.inputAccountInformation(data.accountInfo);
        await this.inputAddressInformation(data.addressInfo);
        await this.verifyCreateAccountSuccess();
    }

}