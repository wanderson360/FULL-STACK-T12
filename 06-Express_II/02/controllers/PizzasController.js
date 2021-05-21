const pizzas = require('../database/pizzas');

const PizzasController = {
    getPizza: (req,res) =>{
        let id = req.params.id;
        // res.send(pizzas[id]);
        res.render("pizza",{pizza: pizzas[id]});
    }
}

module.exports = PizzasController;