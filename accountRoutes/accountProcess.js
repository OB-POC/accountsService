'use strict';
var express = require("express");
var jwt = require('jsonwebtoken');
var { secret, serviceUrls } = require('../config')
var request = require('request');

var router = express.Router();

router.get('/credit', fetchCreditAccounts);
router.get('/debit', fetchDebitAccount);
router.get('/totalBalances', fetchTotalBalances);
router.patch('/customizedMinBalance',saveCustomizedMinBalance);



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


function saveCustomizedMinBalance(req, res) {
    var token = req.headers['x-access-token'];
    var bankId = req.body.bankId;
    var accountNumber = req.body.accountNumber;
    var customizedMinBalance = req.body.customizedMinBalance;

    console.log(req.body);
    jwt.verify(token, secret, function (err, decodedObj) {
        if (err) {
            return res.status(401).send({
                auth: false,
                message: 'Failed to authenticate token.'
            });
        }
        let userName = decodedObj.username;
        
        // fetching of file details
        request.get(`${serviceUrls.dbUrl}/${userName}-debit`,function(error,response,body)
        {
            if(error)
            {
                return res.status(500).send({
                    message: 'Internal server error. Failed to connect to DB'
                });
            }
            var userDebitAccountDetails=JSON.parse(body);

            // getting index of bank
            var bankDetails =[]; 

            for(let i=0;i<userDebitAccountDetails.banks.length;i++){
                if(userDebitAccountDetails.banks[i].bankId === bankId){
                    bankDetails.push({'index':i,'bank':userDebitAccountDetails.banks[i]});
                    break;
                }
            }

            console.log(JSON.stringify(bankDetails));
            // getting index of account of specific bank
            if(bankDetails.length === 1){
                var accountDetails =[];

                for(let j=0;j<bankDetails[0].bank.accounts.length;j++){
                    if(bankDetails[0].bank.accounts[j].accountNumber === accountNumber){
                        accountDetails.push({'index':j,'account':bankDetails[0].bank.accounts[j]});
                        break;
                    }
                }

                console.log(JSON.stringify(accountDetails));

                // making change into the 'customizedMinBalance' key of selected account of a bank
                if(accountDetails.length === 1 ){
                    userDebitAccountDetails.banks[bankDetails[0].index]
                                        .accounts[accountDetails[0].index]
                                        .customizedMinBalance = customizedMinBalance;
                    
                    var data =userDebitAccountDetails;
                    console.log(JSON.stringify(data),'data');                        
                    
                    // saving into the file
                    request.patch({
                        url: serviceUrls.dbUrl +'/'+userName+'-debit',
                        body : data,
                        json : true
                      },function(err,response,body){
                        if(err){
                            return res.status(500).send({
                                message: 'Internal server error. Failed to save to DB'
                            });
                        }
                        console.log(JSON.stringify(body),'modified data dupe');                        
                        res.status(200).json(body);
                        
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