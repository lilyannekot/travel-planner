const { read } = require("fs");
const traveller = require('express').Router();
const { v4: uuidv4 } = require('uuid')
const fs = require('fs');

traveller.get('/api/travellers', (req, res) => {
    fs.readFile('./seeds/travellerSeedData.json').then((data) => 
        res.json(JSON.parse(data))
    )
    console.log(err)
});


app.post('/api/travellers', (req, res) => {

});


app.delete('/api/travellers/:id', (req, res) => {
});


app.post('/api/travellers/:id', (req, res) => {
});