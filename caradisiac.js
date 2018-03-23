var express = require('express')
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world')
})

/*
const {getBrands} = require('node-car-api');

async function print () {
    const brands = await getBrands();

    console.log(brands);
}

print();
*/
const {getModels} = require('node-car-api');

async function print () {
    const models = await getModels('PEUGEOT');

    console.log(models);
}

print();