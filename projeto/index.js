const express = require('express')
const { engine } = require ('express-handlebars');
const bodyParser = require('body-parser')
const app = express();
const Post = require('./Models/Post');
//Config
    //Template Engine
    app.engine('handlebars', engine());
        app.set("view engine", "handlebars")
        app.set('views', 'views');
    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());


//Rotas
    
    app.get('/', (req, res) =>{
        //Passando os dados da tabela para a pagina Home
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})}
            );
        
    });

    app.get('/cad', function (req, res){
        res.render('formulario');
    });

    app.post('/add', function (req, res){
       Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
       }).then(function (){ //Caso ocorra tudo certo
            res.redirect("/");
       }).catch(function (erro){//Caso haja erro
        res.send("Houve um erro: " + erro)
       })
    });
    

    app.get('/deletar/:id', function (req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function (){
            res.send('Postagem deletada com sucesso');
        }
    )})


app.listen(8081, function () {
    console.log("Servidor Rodando na url http://localhost:8081");
});

