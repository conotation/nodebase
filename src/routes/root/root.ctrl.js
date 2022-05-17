"use strict"
const UserStorage = require("../../models/UserStorage")
const User = require("../../models/User")

const output = {
    main: (req, res) => {
        res.render('index')
    },

    login: async (req, res) => {
        res.render('login')
    },

    register: (req, res) => {
        res.render('register')
    },
}

const pcs = {
    login: async (req, res) => {
        const user = new User(req.body)
        const response = await user.login();
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        console.log("reg: " + response);
        return res.json(response);
    },
}

module.exports = {
    output,
    pcs
};