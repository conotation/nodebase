"use strict"

const express = require('express')''
const router = express.Router();

const ctrl = require("./root.ctrl")

router.get("/", ctrl.main)

router.get("/sub", ctrl.sub)

module.exports = router;