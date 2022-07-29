const { read } = require("fs");

app.get('/api/travellers', (req, res) => {
    readFromFile('./seeds/travellerSeedData.json').then((data) => 
        res.json(JSON.parse(data))
    )
});


app.post('/api/travellers', (req, res) => {
    
});


app.delete('/api/travellers/:id', (req, res) => {
});


app.post('/api/travellers/:id', (req, res) => {
});