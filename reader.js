var fs = require('fs')

function readFileText(name, callback) {
	process.nextTick(function (err){
		if(err) {
			return callback(err)
		}
		var content = fs.readFileSync(name)
		callback(err, content.toString())
	})
}

module.exports = readFileText