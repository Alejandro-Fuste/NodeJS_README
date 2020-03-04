const axios = require('axios');

const api = {
	getUser({ userName }) {
		const queryUrl = `https://api.github.com/users/${userName}`;
		const config = { headers: { accept: 'application/json' } };

		axios.get(queryUrl, config).then(function(res) {
			console.log(res);
		});
	}
};

module.exports = api;
