'use strict';
try {
    /*
     *module dependencies
     */
    //var path = require('path');
    var express = require('express');
    const bodyParser = require("body-parser");
    var morgan = require('morgan');
    const logger = require('./applogger');
    var cors = require('cors');
    /*
     *routing dependencies
     */
    var accountRoutes = require('./accountRoutes/accountProcess')
    var app = express();

    app.onAppStart = function (addr) {
        logger.debug("Account services is now Running on port:", addr.port);
    }

    /*
     *middleware configuration
     */
    app.use(cors());
    app.use('', function (req, res, next) {
        //logger.debug("middleware configuration are setted");
        next();
    })
    app.use(morgan("dev"));
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());

    app.use("/accountsService", accountRoutes)

    module.exports = app;
} catch (err) {
    console.log(err);
}