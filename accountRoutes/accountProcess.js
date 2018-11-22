'use strict';
/*
 *module dependencies
 */
//var multer = require('multer');
var express = require("express");
var fs = require("fs");
var path = require("path");
var jwt = require('jsonwebtoken');
var config = require('../config');
var bodyParser=require("body-parser");


var router = express.Router();
const logger = require('./../applogger');
var totalBalances = require('../data/totalBalances');

router.get('/credit', fetchCreditAccounts);
router.get('/debit', fetchDebitAccount);
router.get('/totalBalances', fetchTotalBalances);
router.put('/customizedMinBalance',saveCustomizedMinBalance);



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

function saveCustomizedMinBalance(req, res) {
    var token = req.headers['x-access-token'];
    var bankId = req.body.bankId;
    var accountNumber = req.body.accountNumber;
    var customizedMinBalance = req.body.customizedMinBalance;

    console.log(req.body);
    jwt.verify(token, config.secret, function (err, decodedObj) {
        if (err) {
            return res.status(401).send({
                auth: false,
                message: 'Failed to authenticate token.'
            });
        }
        let userName = decodedObj.username;
        
        // fetching of file details
        fs.readFile('./data/debit/'+userName+'.json',function(error,success)
        {
            if(error)
            {
                return res.status(500).send({
                    message: 'Internal server error. Failed to connect to DB'
                });
            }
            var userDebitAccountDetails=JSON.parse(success);

            // getting index of bank
            var bankDetails =[]; 

            for(let i=0;i<userDebitAccountDetails.banks.length;i++){
                if(userDebitAccountDetails.banks[i].bankId === bankId){
                    bankDetails.push({'index':i,'bank':userDebitAccountDetails.banks[i]});
                    break;
                }
            }

            // getting index of account of specific bank
            if(bankDetails.length === 1){
                var accountDetails =[];

                for(let j=0;j<bankDetails[0].bank.accounts.length;j++){
                    if(bankDetails[0].bank.accounts[j].accountNumber === accountNumber){
                        accountDetails.push({'index':j,'account':bankDetails[0].bank.accounts[j]});
                        break;
                    }
                }

                // making change into the 'customizedMinBalance' key of selected account of a bank
                if(accountDetails.length === 1 ){
                    userDebitAccountDetails.banks[bankDetails[0].index]
                                        .accounts[accountDetails[0].index]
                                        .customizedMinBalance = customizedMinBalance;
                    
                    var data = JSON.stringify(userDebitAccountDetails);

                    // saving into the file
                    fs.writeFile(path.join('./data/debit/'+userName+'.json'),data,function(err){
                        if(err){
                            return res.status(500).send({
                                message: 'Internal server error. Failed to save to DB'
                            });
                        }
                        res.status(200).send(userDebitAccountDetails);
                        
                    });
                }
                else{
                    res.status(200).send({'message':'Account not found'});                    
                }       
            }
            else
                {
                    res.status(200).send({'message':'Bank not found'});
                }     
        });
    });
}

module.exports = router;