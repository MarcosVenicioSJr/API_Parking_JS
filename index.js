(function () {

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

        const infoMoto = {
            name: req.body.name,
            board: req.body.board
        }
        let condition;
        const phrase = "Moto já cadastrada"

        if (motorcycle.length === 0) {
            motorcycle.unshift(infoMoto)
            return res.send(`${JSON.stringify(infoMoto)} foi adcionado com sucesso!`)
        } else {
            let verification = motorcycle.find(value => value.board === infoMoto.board)
            verification === undefined ? (
                res.send(`${JSON.stringify(infoMoto)} moto cadastrada com sucesso.`),
                motorcycle.unshift(infoMoto)
            ) : (
                res.send("Já existe uma moto com essa placa estacionada.")
            )
        }




    })

    app.delete('/removeCar/board', (req, res) => {
        const board = req.body.board

        for (let i = 0; i < car.length; i++) {
            if (board === car[i].board || board === car[i].board) {
                car.splice(i, 1);
                res.send(`O veículo de placa ${JSON.stringify(board)} foi removido com sucesso.`)
            }
        }
        res.send(`Veículo de placa ${JSON.stringify(board)} não encontrado!`)
    })

})()