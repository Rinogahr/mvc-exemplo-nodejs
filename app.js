const express = require('express');
const consign = require('consign');

let app = express();
app.set('view engine', 'ejs');
app.set('view engine', './src/views');

consign()
.include('src/routers')
.then('src/models')
.then('src/controllers')
.into(app);

app.listen(3000, function(){
    console.log(`App rodando na porta 3000 http://localhost:3000`);
});