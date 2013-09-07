var mod = require('./mod')
var path = process.argv[2]
var ext = process.argv[3]

mod(path, ext, function(err, list) {
	if (err) throw err
	list.forEach(function (file) {
		console.log(file)
	})
})