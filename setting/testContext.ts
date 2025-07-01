import {Page} from '@playwright/test';

// Pages
import {HomePage} from '../pages/homePage';
import {SignupOrLoginPage} from '../pages/signupOrLoginPage';
import {SignupPage} from '../pages/signupPage';

// Features
import {HomeFeature} from '../features/homeFeature';
import {SignupOrLoginFeature} from '../features/signupOrLoginFeature';
import {SignupFeature} from '../features/signupFeature';

export class TestContext {
    // Page instance
    readonly page: Page;

    // Pages
    readonly homePage: HomePage;
    readonly signupOrLoginPage: SignupOrLoginPage;
    readonly signupPage: SignupPage;

    // Features
    readonly homeFeature: HomeFeature;
    readonly signupOrLoginFeature: SignupOrLoginFeature;
    readonly signupFeature: SignupFeature;

    constructor(page: Page) {
        // Page instance
        this.page = page;

        // Pages
        this.homePage = new HomePage(page);
        this.signupOrLoginPage = new SignupOrLoginPage(page);
        this.signupPage = new SignupPage(page);

        // Features
        this.homeFeature = new HomeFeature(page);
        this.signupOrLoginFeature = new SignupOrLoginFeature(page);
        this.signupFeature = new SignupFeature(page);
    }
}