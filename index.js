const express = require('express');
const app = express();
app.listen(3000);
app.use(express.json());


let car = []
let motorcycle = []

app.get('/addVehicle/car', (req, res) => {

})
