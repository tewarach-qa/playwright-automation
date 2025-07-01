import { Page } from '@playwright/test';
import { HomePage } from '../pages/homePage';

export class HomeFeature {
    readonly page: Page;
    readonly homePage: HomePage;

    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(page);
    }

    async openAutomationExerciseWebsite() {
        await this.homePage.openBrowser();
        await this.homePage.verifyHomePageVisible();
    }

    async deleteAccount() {
        await this.homePage.clickDeleteAccountButton();
        await this.homePage.verifyDeleteAccountSuccess();
        await this.homePage.clickContinueButton();
    }

    async logout() {
        await this.homePage.clickLogoutButton();
        await this.homePage.verifyHomePageVisible();
    }
}