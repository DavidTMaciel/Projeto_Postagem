const express = require('express')
const { engine } = require ('express-handlebars');
const bodyParser = require('body-parser')

const app = express();

//Config
    //Template Engine
    app.engine('handlebars', engine());
        app.set("view engine", "handlebars")
        app.set('views', 'views');
    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    //Conexão com o banco de dados MySql;
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('sistemadecadastro','root', '3003',{
        host:"localhost",
        dialect:'mysql'
    });

//Rotas

    app.get('/cad', function (req, res){
        res.render('formulario');
    });
    app.post('/add', function (req, res){
        res.send("Texto: "+req.body.titulo+"</br>conteudo "+req.body.conteudo);
    });


app.listen(8081, function () {
    console.log("Servidor Rodando na url http://localhost:8081");
});

