'use strict';
var express = require("express");
var jwt = require('jsonwebtoken');
var { secret, serviceUrls } = require('../config')
var request = require('request');

var router = express.Router();

router.get('/credit', fetchCreditAccounts);
router.get('/debit', fetchDebitAccount);
router.get('/totalBalances', fetchTotalBalances);

function fetchTotalBalances(req, res, next) {
    var token = req.headers['x-access-token'];

    jwt.verify(token, secret, function (err, decodedObj) {
        if (err) {
            return res.status(500).send({
                auth: false,
                message: 'Failed to authenticate token.'
            })
        };
        request
            .get(`${serviceUrls.dbUrl}/userData`, (err, response, body) => {
                if(err) {
                    res.status(500).json({
                        errorMsg: 'User data not available'
                    }); 
                }
                let users = JSON.parse(body);
                if(users instanceof Array) {
                    let userData = users.filter(user => user.username == decodedObj.username);
                    if(userData.length>0) {
                        res.status(200).json(userData[0]);
                    }
                }
            });
    });
}

function fetchCreditAccounts(req, res, next) {
    var token = req.headers['x-access-token'];

    jwt.verify(token, secret, function (err, decodedObj) {        
        if (err) {
            return res.status(401).send({
                auth: false,
                message: 'Failed to authenticate token.'
            })
        };
        let userName = decodedObj.username;

        request
            .get(`${serviceUrls.dbUrl}/${userName}-credit`, (err, response, body) => {
                if(err) {
                    res.status(500).json({
                        errorMsg: 'User data not available'
                    });
                }
                let credits = JSON.parse(body);
                res.status(200).json(credits);
            });
    });

}

function fetchDebitAccount(req, res) {
    var token = req.headers['x-access-token'];
    jwt.verify(token, secret, function (err, decodedObj) {
        if (err) {
            return res.status(401).send({
                auth: false,
                message: 'Failed to authenticate token.'
            });
        }
        let userName = decodedObj.username;

        request
            .get(`${serviceUrls.dbUrl}/${userName}-debit`, (err, response, body) => {
                if(err) {
                    res.status(500).json({
                        errorMsg: 'User data not available'
                    });
                }
                let credits = JSON.parse(body);
                res.status(200).json(credits);
            });
    });
}

module.exports = router;