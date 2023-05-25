const express = require('express')
const { engine } = require ('express-handlebars');

const app = express();

//Config
    //Template Engine
    app.engine('handlebars', engine());
        app.set("view engine", "handlebars")
        app.set('views', 'views');

    //Conexão com o banco de dados MySql;
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('sistemadecadastro','root', '3003',{
        host:"localhost",
        dialect:'mysql'
    });

//Rotas

    app.get('/cad', function (req, res){
        res.render('formulario');
    })


app.listen(8081, function () {
    console.log("Servidor Rodando na url http://localhost:8081");
})

