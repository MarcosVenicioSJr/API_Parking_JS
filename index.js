const express = require('express');

const app = express();

app.listen(3000)

//middleware
app.use(express.json())

let car = [];
let motorcycle = [];

app.get('/getCar', (req, res) => {    
   res.send(car);
})

app.get('/getMotorcycle', (req, res) => {
    res.send(motorcycle);
})

app.post('/addCar', (req, res) => {
    const infoCar = req.body
    car.push(infoCar);
    res.send(`${JSON.stringify(infoCar)} foi adcionado com sucesso!`)
})

app.post('/addMotorcycle', (req, res) => {

    const infoMoto = req.body;

    

})

app.delete('/removeCar/board', (req, res) => {
    const board = req.body.board

    for(let i = 0; i < car.length; i++){
        if(board === car[i].board || board === car[i].board){
            car.splice(i, 1);
            res.send(`O veículo de placa ${JSON.stringify(board)} foi removido com sucesso.`)
        }
    }
    res.send(`Veículo de placa ${JSON.stringify(board)} não encontrado!`)
})