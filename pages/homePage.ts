import {Page, expect} from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openBrowser() {
        await this.page.goto('https://automationexercise.com/');
    }

    async verifyHomePageVisible() {
        await expect(this.page.getByRole('heading', { name: 'AutomationExercise' })).toBeVisible();
    }

    async clickSignupOrLoginButton() {
        await this.page.getByRole('link', {name: 'Signup / Login'}).click();
    }

    async verifyLoggedInSuccess(name: string) {
        await expect(this.page.getByText(new RegExp(`Logged in as ${name}`))).toBeVisible();
    }

    async clickDeleteAccountButton() {
        await this.page.getByRole('link', {name: 'Delete Account' }).click();
    }

    async verifyDeleteAccountSuccess() {
        await expect(this.page.getByText('Account Deleted!')).toBeVisible();
    }
    
    async clickContinueButton() {
        await this.page.getByRole('link', {name: 'Continue' }).click();
    }

    async clickLogoutButton() {
        await this.page.getByRole('link', {name: 'Logout' }).click();
    }

    async verifyInvalidLoginErrorVisible() {
        await expect(this.page.getByText('Your email or password is')).toBeVisible();
    }
}