var http = require('http')

var result = []
var offset = 2
var count_check = process.argv.length - offset
var count = 0 

for(var i = 0; i < count_check; i++) {
	httpGet(i)
}

function httpGet(index) {
	result[index] = '';
	http.get(process.argv[index+offset], function(res) {
		res.on('data', function(data) {
			result[index] += data
		})

		res.on('end', function() {
			count++
			printOutput()
		})
	})
}

function printOutput() {
	if(count==count_check) {
		for(var i=0; i<result.length; i++) {
			console.log(result[i])
		}
	}
}