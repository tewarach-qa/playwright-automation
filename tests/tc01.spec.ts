import {test, expect} from '@playwright/test';
import {TestContext} from '../setting/testContext';
import tc01Data from '../data/tc01.json';

test('Test Case 1: Register User', async ({page}) => {
    const context = new TestContext(page);
    await context.homeFeature.openAutomationExerciseWebsite();
    await context.signupOrLoginFeature.navigateToSignupSection();
    await context.signupOrLoginFeature.inputSignupBasicInfo({
        name:       tc01Data.name,
        email:      tc01Data.email
    });
    await context.signupFeature.inputAccountInformation({
        name:       tc01Data.name,
        email:      tc01Data.email,
        title:      tc01Data.title,
        password:   tc01Data.password,
        dateOfBirth: tc01Data.dateOfBirth
    });
    await context.signupFeature.inputAddressInformation({
        firstName:  tc01Data.firstName,
        lastName:   tc01Data.lastName,
        company:    tc01Data.company,
        address1:   tc01Data.address1,
        address2:   tc01Data.address2,
        country:    tc01Data.country,
        state:      tc01Data.state,
        city:       tc01Data.city,
        zipcode:    tc01Data.zipcode,
        mobileNumber: tc01Data.mobileNumber
    });
    await context.signupFeature.verifyCreateAccountSuccess();
    await context.homePage.verifyLoggedInSuccess(tc01Data.name);
    await context.homeFeature.deleteAccount();
});