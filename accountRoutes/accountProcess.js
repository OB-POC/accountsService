'use strict';
/*
 *module dependencies
 */
//var multer = require('multer');
var express = require("express");
var fs = require("fs");
var path = require("path");
var jwt = require('jsonwebtoken');
var config = require('../config')

var router = express.Router();
const logger = require('./../applogger');
var totalBalances = require('../data/totalBalances');

router.get('/credit', fetchCreditAccounts);
router.get('/debit', fetchDebitAccount);
router.get('/totalBalances', fetchTotalBalances);

function fetchTotalBalances(req, res, next) {
    var token = req.headers['x-access-token'];

    jwt.verify(token, config.secret, function (err, decodedObj) {
        if (err) {
            return res.status(500).send({
                auth: false,
                message: 'Failed to authenticate token.'
            })
        };
        let userName = decodedObj.username;
        var userObj = totalBalances.userData.filter((obj) => {
            return obj.username == userName;
        })[0];
        if (userObj) {
            res.status(200).json(userObj);
        }
    });
}

function fetchCreditAccounts(req, res, next) {
    var token = req.headers['x-access-token'];

    jwt.verify(token, config.secret, function (err, decodedObj) {        
        if (err) {
            return res.status(401).send({
                auth: false,
                message: 'Failed to authenticate token.'
            })
        };
        let userName = decodedObj.username;
        let credit;
        try {
            credit = require('../data/credit/' + userName);
        } catch (err) {
            res.status(500).json({
                errorMsg: 'User data not available'
            });
        }
        res.status(200).json(credit);
    });

}

function fetchDebitAccount(req, res) {
    var token = req.headers['x-access-token'];
    jwt.verify(token, config.secret, function (err, decodedObj) {
        if (err) {
            return res.status(401).send({
                auth: false,
                message: 'Failed to authenticate token.'
            });
        }
        let userName = decodedObj.username;
        let debit;
        try {
            debit = require('../data/debit/' + userName)
        } catch (err) {
            res.status(500).json({
                errorMsg: "User data not available"
            });
        }
        res.status(200).json(debit);
    });
}

function getCreditPath(userName) {
    // let path = "../data/credit/"+userName+".json";
    // let credit = require(path);
    let fullpath = path.join(__dirname, "..", "/data/credit/", userName + ".json");
    //let fullpath = "/data/credit/"+userName+".json";
    let rawdata = fs.readFileSync(fullpath);
    let credit = JSON.parse(rawdata);
    return credit;
}


function getDebitPath(userName) {
    // let fullpath = "../data/debit/"+userName+".json";
    // let debit = require(fullpath);
    let fullpath = path.join(__dirname, "..", "/data/debit/", userName + ".json");
    let rawdata = fs.readFileSync(fullpath);
    let debit = JSON.parse(rawdata);
    return debit;
}

module.exports = router;