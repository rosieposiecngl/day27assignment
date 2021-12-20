var express = require('express')
var app = express()

app.get('/name/', function(req, res) {
    // console.log('hallo namaku cindy')
    console.log(req.query) //return full name
        // res.send('halo namaku cindy')

})

app.get('/name/:first', function(req, res) {
    // console.log('hallo namaku cindy')
    console.log(req.query) //return first name
        // res.send('halo namaku cindy')

})

app.get('/name/:last', function(req, res) {
    // console.log('hallo namaku cindy')
    console.log(req.query) //return last name
        // res.send('halo namaku cindy')

})

app.listen(3000)