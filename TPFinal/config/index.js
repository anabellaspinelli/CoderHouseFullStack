var orcorum = require('orcorum');
var CONFIG = require('./default');

module.exports = {
	get: function(key, defaultValue) {
		return orcorum.object.get(CONFIG, key, defaultValue);
	}
};