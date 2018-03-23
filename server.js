const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');
const express = require('express');
const app = express();
//Function to obtain Brand & Model

async function getBrand(){
    const brands = await getBrands();
    return brands;
}

async function getModel(string){
    const models = await getModels(string);
    return models;
}

var liste=[];
let brands = getBrand();
brands.then(function(result)
{
    for (var i = 0; i < result.length; i++) {
        informations = getModel(result[i]);

        informations.then(function(res){
            res.forEach(function(element){
                liste.push(element)
            })
            var json = JSON.stringify(liste)
            fs.writeFile('liste_caradisiac.json',json,'utf8');
        })
    }
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/populate', function (req, res) {
    res.send('hello mon petit !')
})

app.listen(3000, function(){
    console.log("Bienvenue sur le port 3000!");
})