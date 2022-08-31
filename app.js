const express = require('express');
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 4000;
//parse the body of any request coming from html forms
app.use(express.urlencoded({ extended: true }));
//parse the body of any request not coming through an html form
app.use(express.json());
//allow CORS from any origin
app.use(cors());

const pokemonRouter = require('./Routers/pokemons');
app.use('/pokemon', pokemonRouter);


/*
app.get("/pokemon", (req, res, next) => {
    res.send(jsonData);
})

app.get("/pokemon/:id", (req, res, next) => {
    const { id } = req.params;
    console.log(req.params);
    console.log(id);
    const myPokemon = jsonData.filter(pokemon => { return pokemon.id === Number(id) });
    console.log(myPokemon);
    res.send(myPokemon);
})

app.get("/pokemon/:id/:info", (req, res, next) => {
    const { id, info } = req.params;
    console.log(req.params);
    console.log(info);
    const myPokemon = jsonData.filter(pokemon => { return pokemon.id === Number(id) });
    console.log(myPokemon)
    const myPokemonInfo = myPokemon[0][info];
    console.log(myPokemonInfo);
    res.send(myPokemonInfo);
})
*/


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });




 