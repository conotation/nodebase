'use strict'

const express = require('express')
const router = express.Router();

const ctrl = require('./root/root.ctrl')

router.get('/', ctrl.output.main)

router.get('/login', ctrl.output.login)

router.post('/login', ctrl.pcs.login)

module.exports = router;