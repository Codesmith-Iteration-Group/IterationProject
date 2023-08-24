const request = require('supertest');

const server = 'http://localhost:3000';
const fs = require('fs');
const path = require('path');

import {describe, expect, test} from '@jest/globals'

// LOGIN TESTING
describe('POST /user/login', () => {
    describe('when given a username and password', () => {
        // should get a cookie upon login
        it('should return status of 200 if both are correct', () => {
            const loginBody = {
                username: 'username',
                password: 'password'
            }
            return request(server)
                .post('/user/login')
                .send(loginBody)
                .expect(200)
        })
    })
})