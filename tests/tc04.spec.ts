import {test, expect} from '@playwright/test';
import {TestContext} from '../setting/testContext';
import tc04Data from '../data/tc04.json';

test('Test Case 4: Logout User', async ({page}) => {
    const context = new TestContext(page);
    await context.homeFeature.openAutomationExerciseWebsite();
    await context.signupOrLoginFeature.navigateToLoginSection();
    await context.signupOrLoginFeature.loginWithValidData({
        email:      tc04Data.email,
        password:   tc04Data.password,
        name:       tc04Data.name
    });
    await context.homeFeature.logout
});