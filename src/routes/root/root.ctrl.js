"use strict"

/**
 * 로그인
 * 
 * @api {post} /login 로그인
 * 
 * @apiName login
 * @apiGroup Auth
 * @apiVersion 1.0.0
 * @apiDescription 로그인 쿼리를 요청합니다.
 * 
 * @apiParam {String} Users id, password
 * 
 * @apiParamExample {json} client id, pw value
 * {
 *  "id": "qwer",
 *  "password": "123456"
 * }
 * 
 * @apiSuccess {String} function return true
 * 
 * @apiSuccessExample {json} Response (example):
 * {
 *  "success": true
 * }
 * @apiError error function return false and message
 * 
 * @apiErrorExample {json} Error (example):
 * {
 *  success: false,
 *  msg: "출력되는 에러 메시지"
 * }
 * 
 */

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