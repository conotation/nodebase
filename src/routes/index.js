'use strict'

const express = require('express')
const router = express.Router();

const User = require('../models/User')

const ctrl = require('./root/root.ctrl')

router.get('/', ctrl.output.main)

router.get('/login', ctrl.output.login)

router.post('/login', ctrl.pcs.login)

router.get('/register', ctrl.output.register)

router.post('/register', ctrl.pcs.register)

module.exports = router;