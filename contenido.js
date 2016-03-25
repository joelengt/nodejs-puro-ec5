var reader = require('./reader')

reader('./public/index.html', function (err, content) {
	if(err) {
		return console.log(err)
	}
	console.log(content)
})