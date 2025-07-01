import {test, expect} from '@playwright/test';

const BASE_URL = 'https://automationexercise.com/api';

test.describe('AutomationExercise API Collection', () => {
    test('API 1: Get All Products List', async ({request}) => {
        const response = await request.get(`${BASE_URL}/productsList`);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.responseCode).toBe(200);
        expect(responseBody).toBeTruthy();
    });

    test('API 4: PUT To All Brands List', async ({request}) => {
        const response = await request.put(`${BASE_URL}/brandsList`);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.responseCode).toBe(405);
        expect(responseBody.message).toBe('This request method is not supported.');
    });

    test('API 11: POST To Create/Register User Account', async ({request}) => {
        const email = `test${Date.now()}@mail.com`;
        const response = await request.post(`${BASE_URL}/createAccount`, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            form: {
                name: 'Test AddUser',
                email,
                password: 'P@ssw0rd',
                title: 'Mr.',
                birth_date: '01',
                birth_month: '01',
                birth_year: '2000',
                firstname: 'Automate',
                lastname: 'API',
                company: 'Test Company',
                address1: 'Test Address',
                address2: 'Test Address 2',
                country: 'Canada',
                zipcode: 'Test Zipcode',
                state: 'Test State',
                city: 'Test City',
                mobile_number: '1234567890'
            }
        });
        expect(response .status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.responseCode).toBe(201);
        expect(responseBody.message).toBe('User created!');
    });

    test('API 12: DELETE METHOD To Delete User Account', async ({request}) => {
        const resCreate = await request.post(`${BASE_URL}/createAccount`, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            form: {
                name: 'API12',
                email: 'delete.test@email.com',
                password: 'P@ssw0rd',
                title: 'Mr.',
                birth_date: '01',
                birth_month: '01',
                birth_year: '2000',
                firstname: 'Automate',
                lastname: 'API',
                company: 'Test Company',
                address1: 'Test Address',
                address2: 'Test Address 2',
                country: 'Canada',
                zipcode: 'Test Zipcode',
                state: 'Test State',
                city: 'Test City',
                mobile_number: '1234567890'
            }
        });
        expect(resCreate.status()).toBe(200);
        const response = await request.delete(`${BASE_URL}/deleteAccount`, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            form: {
                email: 'delete.test@email.com',
                password: 'P@ssw0rd'
            }
        });
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.responseCode).toBe(200);
        expect(responseBody.message).toBe('Account deleted!');
    });

    test('API 14: GET user account detail by email', async ({request}) => {
        const email = 'automate04.test@gmail.com';
        const response = await request.get(`${BASE_URL}/getUserDetailByEmail`, {
            params: {email}
        });
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.responseCode).toBe(200);
        expect(responseBody).toHaveProperty('user');
        expect(responseBody.user).toHaveProperty('email', email);
    });
});