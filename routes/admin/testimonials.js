// Aqui será a rota para a página de administração de testemunhos

var express = require('express');
var router = express.Router();
var testimonialsService = require('../../services/testimonialsService')

// Cada roteamento recebe 3 variáveis na function abaixo: req / res / next 

router.get('/', function(req, res ,next) { // get é uma função que tem 2 parâmetros, o primeiro é a string '/' e o segundo é uma função
    var testimonials = testimonialsService.getTestimonials();  
    var data = {horse: testimonials};
    res.render('admin/testimonials/index', data); // O comando res.render renderiza um template e refere-se a "response" ou seja resposta para o browser
});


router.get('/create', function(req, res ,next) { 
    var testimonials = testimonialsService.getTestimonials();  
    var data = {horse: testimonials};
    res.render('admin/testimonials/create', data);
});


router.post('/create', function(req, res ,next) {  // o comando post nesta linha refere-se ao verbo POST do http (Get, Post, Put e Delete) e rerefe-se a "colocar" uma informação
                                                   // A título de informação, informações enviadas com GET aparece na URL do Browser e com POST não
    var testimonials = testimonialsService.getTestimonials();
    var newId = testimonials.length + 1;
    var newTestimonial ={};

    newTestimonial.id = newId; 
 
    newTestimonial.name = req.body.testimonialName;     // o variável "description" refere-se ao nome dado para a propriedade NAME do terceiro imputbox do formulário do arquivo create.ejs
 
    newTestimonial.title = req.body.testimonialTitle; // o variável "testimonialBody" refere-se ao nome dado para a propriedade NAME do quarto imputbox do formulário do arquivo create.ejs
 
    newTestimonial.company = req.body.testimonialCompany;

    newTestimonial.testemunho = req.body.testimonialTestemunho; // o REQ refere-se ao que que o Browser enviou-nos no momento da solicitação. REQ vem de require/request
                                           // o variável "title" refere-se ao nome dado para a propriedade NAME do primeiro imputbox do formulário do arquivo create.ejs
  

    console.log(newTestimonial); // Utilizamos o console.log para verificar se foi capturado as informações acima do browser pelo servidor
                                 // Neste caso o console.log acima funciona como uma espécie de Checkpoint. 
                                 // Os valores apresentador pelo console.log acima estarão disponíveis no terminal 

    testimonialsService.saveTestimonial(newTestimonial);

    res.redirect('/admin/testimonials');   // O comando res.redirect redireciona o usuario para outro caminho do site, neste caso redirecionará para 'admin/testimonials'
});



module.exports = router;




