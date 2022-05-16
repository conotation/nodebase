"use strict"
const UserStorage = require("../../models/UserStorage")

const output = {
    main: (req, res) => {
        res.render('index')
    },

    login: (req, res) => {
        res.render('login')
    }
}

const pcs = {
    login: (req, res) => {
        console.log(req.body);
        const id = req.body.id,
            password = req.body.password;

        const users = UserStorage.getUsers("id", "password");
        const response = {}

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password) {
                response.success = true;
                return res.json(response);
            }
        }
        res.success = false;
        response.msg = "로그인에 실패했습니다."
        return res.json(response);
    },
}

module.exports = {
    output,
    pcs
};