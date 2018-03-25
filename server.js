const express = require('express');
const jsonfile = require('jsonfile');
const fs = require('fs');
const app = express();

//Function to obtain Brand & Model
const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');

async function getBrand(){
    const brands = await getBrands();
    return brands;
}

async function getModel(string){
    const models = await getModels(string);
    return models;
}

var liste=[];

let brands = getBrand();/*
    brands.then(function(result)
    {
        for (var i = 0; i < result.length; i++) {

            informations = getModel(result[i]);
            informations.then(function(res)
            {
                res.forEach(function(element)
                {
                    liste.push(element)
                })
                var json = JSON.stringify(liste)
                fs.writeFile('liste_caradisiac.json',json,'utf8');
            })
        }
    });
//On se place sur le port 9292
app.listen(9292, () => {
    console.log("Bienvenue sur le port 9292 !");
});
/*
//We make the root populate
app.get('/populate',function(req,res){

    var file = "./liste_caradisiac.json";
    var caradisiac = jsonfile.readFileSync(file);

    var client = new elasticsearch.Client({
        host: 'localhost:9200',
        log: 'trace'
    });

    var body = [];
    for (var i = 0; i < liste_caradisiac.length; i++ ) {
        var config = { index:  { _index: 'liste_caradisiac', _type: 'suv', _id: i } };
        body.push(config);
        body.push(liste_caradisiac[i]);
    }

    client.bulk({
        body: body
    }, function (error, response) {
        if (error) {
            console.error(error);
            return;
        }
        else {
            console.log(response);
        }
    });
    res.send("elasticsearch");
})

/*
app.get('/suv', function(req,res){

    var file = "./liste_caradisiac.json";
    var liste_caradisiac = jsonfile.readFileSync(file);

    var client = new elasticsearch.Client({
        host: 'localhost:9200',
        log: 'trace'
    });

    client.search({
        index: 'liste_caradisiac',
        type: 'suv',
        body:{
            "size":80,
            "sort":[
                {"volume.keyword" :{"order":"desc"}}
            ]
        }
    },function (error, response,status) {
        if (error){
            console.log("search error: "+error)
        }
        else {
            console.log("--- Response ---");
            console.log(response);
            console.log("--- Hits ---");
            res.send(response.hits.hits);
        }
    });

})
*/