import {test, expect} from '@playwright/test';
import {TestContext} from '../setting/testContext';
import tc03Data from '../data/tc03.json';

test('Test Case 3: Login User with incorrect email and password', async ({page}) => {
    const context = new TestContext(page);
    await context.homeFeature.openAutomationExerciseWebsite();
    await context.signupOrLoginFeature.navigateToLoginSection();
    await context.signupOrLoginFeature.loginWithInvalidData({
        email:      tc03Data.email,
        password:   tc03Data.password
    });
});