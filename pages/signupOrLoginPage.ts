import {Page, expect} from '@playwright/test';

export class SignupOrLoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifySignupSectionVisible() {
        await expect(this.page.getByRole('heading', {name: 'New User Signup!'})).toBeVisible();
    }

    async inputName(name: string) {
        await this.page.getByRole('textbox', {name: 'Name'}).fill(name);
    }

    async inputEmail(email: string) {
        await this.page.locator('form').filter({hasText: 'Signup'}).getByPlaceholder('Email Address').fill(email);
    }

    async clickSignupButton() {
        await this.page.getByRole('button', {name: 'Signup'}).click();
    }

    async verifyLoginSectionVisible() {
        await expect(this.page.getByRole('heading', {name: 'Login to your account'})).toBeVisible();
    }

    async verifyLoginHeadingVisible() {
        await expect(this.page.getByRole('heading', {name: 'Login to your account'})).toBeVisible();
    }

    async inputLoginByEmail(email: string) {
        await this.page.locator('form').filter({hasText: 'Login'}).getByPlaceholder('Email Address').fill(email);
    }

    async inputLoginByPassword(password: string) {
        await this.page.getByRole('textbox', {name: 'Password'}).fill(password);
    }

    async clickLoginButton() {
        await this.page.getByRole('button', {name: 'Login'}).click();
    }

    async verifyErrorExistingEmail() {
        await expect(this.page.getByText('Email Address already exist!')).toBeVisible();
    }

}
