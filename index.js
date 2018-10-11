const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser')
let app = express();

app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.json())



consign().include('routes').include('utils').into(app);

app.listen(5500,'127.0.0.1',()=>{

    console.log("Server rodando...")

})