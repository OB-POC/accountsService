const assert = require('chai').assert;
const request = require('supertest');


const alice_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaWNlIiwiaWF0IjoxNTM4OTk2MjQ4LCJleHAiOjE1MzkwODI2NDh9._eaVntxHE99wVQIDYMQ0ICUDrJusetscYoKGU0tZPfk";
const john_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaWNlIiwiaWF0IjoxNTM4OTk2MjQ4LCJleHAiOjE1MzkwODI2NDh9._eaVntxHE99wVQIDYMQ0ICUDrJusetscYoKGU0tZPfk";

var container = request(require('../app'));

describe('Account service', function () {

  describe('Alice Debit account', function () {
    xit('Calling the alice debit account - positive', function (done) {
      container
        .get(`/accountsService/debit`)
        .set("x-access-token", alice_token)
        .expect(200, done)
    });
    it('Calling the alice debit account with wrong token - negative', function (done) {
      container
        .get(`/accountsService/debit`)
        .set("x-access-token", "wrong token")
        .expect(401, done)
    });
  })

  describe('Alice credit account', function () {
    xit('Calling the alice credit account - positive', function (done) {
      container
        .get(`/accountsService/credit`)
        .set("x-access-token", alice_token)
        .expect(200, done)
    });
    it('Calling the alice credit account with wrong token - negative', function (done) {
      container
        .get(`/accountsService/credit`)
        .set("x-access-token", "wrong token")
        .expect(401, done)
    });
  })

  describe('John Debit account', function () {
    xit('Calling the john debit account - positive', function (done) {
      container
        .get(`/accountsService/debit`)
        .set("x-access-token", john_token)
        .expect(200, done)
    });
    it('Calling the john debit account with wrong token - negative', function (done) {
      container
        .get(`/accountsService/debit`)
        .set("x-access-token", "wrong token")
        .expect(401, done)
    });
  })

  describe('john credit account', function () {
    xit('Calling the john credit account - positive', function (done) {
      container
        .get(`/accountsService/credit`)
        .set("x-access-token", john_token)
        .expect(200, done)
    });
    it('Calling the john credit account with wrong token - negative', function (done) {
      container
        .get(`/accountsService/credit`)
        .set("x-access-token", "wrong token")
        .expect(401, done)
    });
  })
})