const axios = require('axios');

const api = {
	getUser(userName) {
		const queryUrl = `https://api.github.com/users/${userName}`;
		const config = { headers: { accept: 'application/json' } };

		return axios.get(queryUrl, config);
	}
};

module.exports = api;
