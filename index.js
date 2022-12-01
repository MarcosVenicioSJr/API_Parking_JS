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

app.delete('/removeCar/board', (req, res) => {
    const board = req.body.board

    for(let i = 0; i < car.length; i++){
        if(board === car[i].board || board === car[i].board){
            car.splice(i, 1);
        }
    }
    res.send(`O veículo de placa ${board} foi removido com sucesso.`)
})