var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('List of resent searches:')
})

app.get('/:searchTerm', function(req, res) {
  res.send('List of results: ' + req.params.searchTerm)
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
