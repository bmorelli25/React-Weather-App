const axios = require('axios');

const IP_INFO_URL = 'http://ipinfo.io';

module.exports = {
	getLocation: function () {
		return axios.get(IP_INFO_URL).then(function (res) {
			if(res.status !== 200) {
				throw new Error(res.data); // throw new error if response code is not OK i.e 200
			}
			return res.data; // if everything is OK, retur the response data
		}, function (res) {
			throw new Error(res.data.message); //if api sends an error, we pull then show to user
		});
	}

};
