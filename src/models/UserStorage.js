"use strict"

class UserStorage {
    static #users = {
        id: ["양상우", "김개발", "박부장"],
        password: ["1234", "1234", "123456"],
        name: ['양땅우', '땡땡이', '곱창먹고싶다']
    }

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field]
            }
            return newUsers
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKey.reduce((newUser, info) => {
            newUsers[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return { success: true }
    }
}

module.exports = UserStorage;