import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const handlebars = require('handlebars');



//Config
    //Template Engine
        app.engine('handlebars', handlebars({
            defaultLayout:'main' //O layout main será o template padrão que estará dentro da pasta views/layout
        }))
        app.set('view engine', 'handlebars');
//Nas duas linhas acima do codigo estamos configurando o templante
    //Conexão com o banco de dados MySql;
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('sistemadecadastro','root', '3003',{
        host:"localhost",
        dialect:'mysql',
    });


app.listen(8081, function () {
    console.log("Servidor Rodando na url http://localhost:8081");
})

