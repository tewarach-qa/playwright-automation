import {test, expect} from '@playwright/test';
import {TestContext} from '../setting/testContext';
import tc02Data from '../data/tc02.json';

test('Test Case 2: Login User with correct email and password', async ({page}) => {
    const context = new TestContext(page);
// Pre-condition register new user
    await context.homeFeature.openAutomationExerciseWebsite();
    await context.signupFeature.signupNewUser({
        accountInfo: {
            name:       tc02Data.name,
            email:      tc02Data.email,
            title:      tc02Data.title,
            password:   tc02Data.password,
            dateOfBirth: {
                day:    tc02Data.dateOfBirth.day,
                month:  tc02Data.dateOfBirth.month,
                year:   tc02Data.dateOfBirth.year
            }
        },
        addressInfo: {
            firstName:  tc02Data.firstName,
            lastName:   tc02Data.lastName,
            company:    tc02Data.company,
            address1:   tc02Data.address1,
            address2:   tc02Data.address2,
            country:    tc02Data.country,
            state:      tc02Data.state,
            city:       tc02Data.city,
            zipcode:    tc02Data.zipcode,
            mobileNumber: tc02Data.mobileNumber
        }
    });
    await context.homePage.clickLogoutButton();
// Test steps
    await context.signupOrLoginFeature.navigateToLoginSection();
    await context.signupOrLoginFeature.loginWithValidData({
        email:      tc02Data.email,
        password:   tc02Data.password,
        name:       tc02Data.name,
    });
    await context.homeFeature.deleteAccount();
});
