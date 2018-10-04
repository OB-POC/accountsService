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

router.get('/credit',fetchCreditAccounts);
router.get('/debit',fetchDebitAccount);

function fetchCreditAccounts(req, res, next){
    var token = req.headers['x-acces-token'];

    jwt.verify(token, config.secret , function(err, decodedObj){
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });  
        let username = decodedObj.username;
        try{
            let credit = getCreditPath(userName);
        }
        catch(err)
        {
            res.status(500).json({
                errorMsg: 'User data not available'
            });
        }
        
        res.status(200).json(credit);
    });
    
}

function fetchDebitAccount(req, res, next){
    let userName = "alice";
    try{
        let debit = getDebitPath(userName);
    }
    catch(err)
    {
        res.status(500).send("Invalid username");
    }
    res.status(200).json(debit);
}

function getCreditPath(userName){
    // let path = "../data/credit/"+userName+".json";
    // let credit = require(path);
    let fullpath = path.join(__dirname,"..","/data/credit/",userName+".json");
    //let fullpath = "/data/credit/"+userName+".json";
    let rawdata = fs.readFileSync(fullpath);
    let credit = JSON.parse(rawdata);
    return  credit;
}


function getDebitPath(userName){
    // let fullpath = "../data/debit/"+userName+".json";
    // let debit = require(fullpath);
    let fullpath = path.join(__dirname,"..","/data/debit/",userName+".json");
    let rawdata = fs.readFileSync(fullpath);
    let debit = JSON.parse(rawdata);
    return  debit;
}

module.exports = router;
