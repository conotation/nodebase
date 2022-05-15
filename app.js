"use strict"

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');

const root = require('./src/routes');

const reqPre = (req, res, next) => {
	var fUrl = req.protocol + "://" + req.get('host') + req.originalUrl;
	var now = new Date()
	console.log(`${now.toISOString()} : ${fUrl}`);
	next();
}

app.use(reqPre);

app.set("views", "src/views");
app.set("view engine", "pug");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", root);



module.exports = app;