"use strict"

const express = require('express')
const app = express()

const root = require('./src/routes/root')

app.set("views", "src/views")
app.set("view engine", "pug")
app.use(express.static(`${__dirname}/src/public`))

app.use("/", root);

module.exports = app;