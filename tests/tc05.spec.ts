import {test, expect} from '@playwright/test';
import {TestContext} from '../setting/testContext';
import tc05Data from '../data/tc05.json';

test('Test Case 5: Register User with existing email', async ({page}) => {
    const context = new TestContext(page);
    await context.homeFeature.openAutomationExerciseWebsite();
    await context.signupOrLoginFeature.navigateToSignupSection();
    await context.signupOrLoginFeature.inputSignupBasicInfo({
        name:       tc05Data.name,
        email:      tc05Data.email
    });
    await context.signupOrLoginPage.verifyErrorExistingEmail
});
