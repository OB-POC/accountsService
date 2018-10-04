'use strict';
/* 
*module dependencies
*/
//var multer = require('multer');
var express = require("express");
var fs = require("fs");
var router = express.Router();
const logger = require('./../applogger');

router.get('/credit',fetchCreditAccounts);
router.get('/debit',fetchDebitAccount);

function fetchCreditAccounts(req,res){
    let userName = "alice";
    let credit = getCreditPath(userName);
    res.json(credit);
}

function fetchDebitAccount(req,res){
    let userName = "alice";
    let debit = getDebitPath(userName);
    res.json(debit);
}

function getCreditPath(userName){
    let path = "../data/credit/"+userName+".json";
    let credit = require(path);
    // let path = "/data/credit/"+userName+".json";
    // let rawdata = fs.readFileSync(path);
    // let credit = JSON.parse(rawdata);
    return  credit;
}


function getDebitPath(userName){
    let path = "../data/debit/"+userName+".json";
    let debit = require(path);
    // let path = "/data/debit/"+userName+".json";
    // let rawdata = fs.readFileSync(path);
    // let debit = JSON.parse(rawdata);
    return  debit;
}

module.exports = router;
