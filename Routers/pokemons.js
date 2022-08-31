const express = require('express');
pokemonRouter = express.Router();

let jsonData = require('../pokemonFile.json');

pokemonRouter.get("/", (req, res, next) => {
    res.send(jsonData);
})

pokemonRouter.get("/:id", (req, res, next) => {
    const { id } = req.params;
    console.log(req.params);
    console.log(id);
    const myPokemon = jsonData.filter(pokemon => { return pokemon.id === Number(id) });
    console.log(myPokemon);
    res.send(myPokemon);
})

pokemonRouter.get("/:id/:info", (req, res, next) => {
    const { id, info } = req.params;
    console.log(req.params);
    console.log(info);
    const myPokemon = jsonData.filter(pokemon => { return pokemon.id === Number(id) });
    console.log(myPokemon)
    const myPokemonInfo = myPokemon[0][info];
    console.log(myPokemonInfo);
    res.send(myPokemonInfo);
})

module.exports = pokemonRouter;
