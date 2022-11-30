const express = require('express');

const app = express();

app.listen(3000)

//middleware
app.use(express.json())

let car = [];
let motorcycle = [];

app.get('/getCar', (req, res) => {    
   res.send(car)
})

app.post('/addCar', (req, res) => {

    const infoCar = req.body
    car.push(infoCar);
    res.send("OK")

})