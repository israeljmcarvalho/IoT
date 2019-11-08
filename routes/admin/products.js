//25:31
// Aqui será a rota para a página de administração de produtos

var express = require('express');
var router = express.Router();
var productsService = require('../../services/productsService')
var upload = require('../../middlewares/uploaderMiddleware');

// Cada roteamento recebe 3 variáveis na function abaixo: req / res / next 

router.get('/', function(req, res ,next) { // get é uma função que tem 2 parâmetros, o primeiro é a string '/' e o segundo é uma função
    var products = productsService.getProducts();  
    var data = {fish: products};
    res.render('admin/products/index', data); // O comando res.render renderiza um template e refere-se a "response" ou seja resposta para o browser
});

router.get('/create', function(req, res ,next) { 
    var products = productsService.getProducts();  
    var data = {fish: products};
    res.render('admin/products/create', data);
});

router.post('/create', upload.single('product_Image'), function(req, res ,next) {  // o comando post nesta linha refere-se ao verbo POST do http (Get, Post, Put e Delete) e rerefe-se a "colocar" uma informação
                                                 // A título de informação, informações enviadas com GET aparece na URL do Browser e com POST não
                                                 // upload.single('image') é um middleware importade de uma biblioteca de terceiro
                                                 // product_Image é p NAME do arquivo create.ejs do imputbox da upload de imagem
    var products = productsService.getProducts();
    var newId = products.length + 1;
    var newProject ={};
    newProject.id = newId; 
    newProject.name = req.body.product_Name; // o REQ refere-se ao que que o Browser enviou-nos no momento da solicitação. REQ vem de require/request
                                           // o variável "product_Name" refere-se ao nome dado para a propriedade NAME do primeiro imputbox do formulário do arquivo create.ejs
    
    newProject.image = req.file.filename;           
    newProject.price = req.body.product_Price;     // a variável "product_Price" refere-se ao nome dado para a propriedade NAME do terceiro imputbox do formulário do arquivo create.ejs
    newProject.description = req.body.product_Description; // a variável "product_Description" refere-se ao nome dado para a propriedade NAME do quarto imputbox do formulário do arquivo create.ejs

    console.log(newProject); // Utilizamos o console.log para verificar se foi capturado as informações acima do browser pelo servidor
                                 // Neste caso o console.log acima funciona como uma espécie de Checkpoint. 
                                 // Os valores apresentador pelo console.log acima estarão disponíveis no terminal 

    productsService.saveProject(newProject);

    res.redirect('/admin/products');   // O comando res.redirect redireciona o usuario para outro caminho do site, neste caso redirecionará para 'admin/products'
});



module.exports = router;




