var fs = require('fs');

module.exports = function listpath(path, extension, callback) {
	fs.readdir(path, function(err, list) {
		if (err) return callback(err)
		var re = new RegExp('\\.'+extension+'$')
		list = list.filter(function (file) {
			return re.test(file)
		})
		callback (null, list)
	})
}