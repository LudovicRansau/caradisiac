var express = require('express')
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/populate', function (req, res) {
    res.send('hello world')
})

app.listen(3000, function(){
    console.log("Bienvenu sur le port 3000!");
})