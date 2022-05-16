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
			if(users.hasOwnProperty(field)) {
				newUsers[field] = users[field]
			}
			return newUsers
		}, {});
		return newUsers;
	}
}

module.exports = UserStorage;