import {Page, expect} from '@playwright/test';
import {SignupOrLoginPage} from '../pages/signupOrLoginPage';
import {HomePage} from '../pages/homePage';

export class SignupOrLoginFeature {
    readonly page: Page;
    readonly signupOrLoginPage: SignupOrLoginPage;
    readonly homePage: HomePage;

    constructor(page: Page) {
        this.page = page;
        this.signupOrLoginPage = new SignupOrLoginPage(page);
        this.homePage = new HomePage(page);
    }

    async navigateToSignupSection() {
        await this.homePage.clickSignupOrLoginButton();
        await this.signupOrLoginPage.verifySignupSectionVisible();
    }

    async inputSignupBasicInfo(data: {name: string; email: string }) {
        await this.signupOrLoginPage.inputName(data.name);
        await this.signupOrLoginPage.inputEmail(data.email);
        await this.signupOrLoginPage.clickSignupButton();
    }

    async navigateToLoginSection() {
        await this.homePage.clickSignupOrLoginButton();
        await this.signupOrLoginPage.verifyLoginSectionVisible();
    }

    async loginWithValidData(data: {email: string, password: string, name:string}) {
        await this.signupOrLoginPage.inputLoginByEmail(data.email);
        await this.signupOrLoginPage.inputLoginByPassword(data.password);
        await this.signupOrLoginPage.clickLoginButton();
        await this.homePage.verifyLoggedInSuccess(data.name);
    }

    async loginWithInvalidData(data: {email: string, password: string}) {
        await this.signupOrLoginPage.inputLoginByEmail(data.email);
        await this.signupOrLoginPage.inputLoginByPassword(data.password);
        await this.signupOrLoginPage.clickLoginButton();
        await this.homePage.verifyInvalidLoginErrorVisible();
    }
}