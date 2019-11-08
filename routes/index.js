var express = require('express');
var router = express.Router();
var lista_post = require('../services/postsService'); //Tipo dar um include do arquivo postsService
var lista_project = require('../services/projectsService'); 
var lista_product = require('../services/productsService'); 
var lista_notice = require('../services/noticesService');
var lista_testimonial = require('../services/testimonialsService');

/* GET home page. */
router.get('/', function(req, res, next) {
  var xposts = lista_post.getPosts().slice(0, 3); // getPosts().slice(0, 3) defini que só será apresentado os 3 primeiros posts.
  res.render('index', {title: 'BLog', posts:xposts}); //posts:posts = o primeiro posts refere-se ao nome que será utilizado como parâmetro no HTML principal, ja o segundo post é o nome da variavel declarada acima
});

//================================================================================================================

// O código abaixo refere-se as páginas http://localhost:3000/post/1 ou http://localhost:3000/post/2..
router.get('/post/:postId', function(req, res, next){
    var postId=req.params.postId;
    var posts = lista_post.getPosts();
    var ypost =posts.filter((post) => post.id == postId)[0];
    res.render('post', {title: ypost.title, post: ypost});
});

// O código abaixo refere-se as páginas http://localhost:3000/project/1 ou http://localhost:3000/project/2..
router.get('/project/:projectId', function(req, res, next){
  var projectId=req.params.projectId;
  var projects = lista_project.getProjects();
  var yproject =projects.filter((project) => project.id == projectId)[0];
  res.render('project', {title: yproject.title, project: yproject});
});

// O código abaixo refere-se as páginas http://localhost:3000/product/1 ou http://localhost:3000/product/2..
router.get('/product/:productId', function(req, res, next){
  var productId=req.params.productId;
  var products = lista_product.getProduct();
  var yproduct =products.filter((product) => product.id == productId)[0];
  res.render('product', {title: yproduct.title, product: yproduct});
});

// O código abaixo refere-se as páginas http://localhost:3000/notice/1 ou http://localhost:3000/notice/2..
router.get('/notice/:noticeId', function(req, res, next){
  var noticeId=req.params.noticeId;
  var notices = lista_notice.getNotices();
  var ynotice =notices.filter((notice) => notice.id == noticeId)[0];
  res.render('notice', {title: ynotice.title, notice: ynotice});
});


//================================================================================================================

// O código abaixo refere-se a página http://localhost:3000/posts onde estarão listados todos os posts
router.get('/posts', function(req, res, next){
  var lposts=lista_post.getPosts();
  res.render('posts', {title: 'Relação de Posts', mouse: lposts});  //posts refere-se ao arquivo posts.ejs que é o arquivo onde as informações serão enviadas | lposts é o que será rederizado (variável criada acima)
});

// O código abaixo refere-se a página http://localhost:3000/projects onde estarão listados todos os projetos
router.get('/projects', function(req, res, next){
  var lprojects=lista_project.getProjects();
  res.render('projects', {title: 'Relação de Projetos', lion: lprojects});  //projects refere-se ao arquivo projects.ejs que é o arquivo onde as informações serão enviadas | lprojects é o que será rederizado (variável criada acima)
});

// O código abaixo refere-se a página http://localhost:3000/products onde estarão listados todos os projetos
router.get('/products', function(req, res, next){
  var lproducts=lista_product.getProducts();
  res.render('products', {title: 'Relação de Produtos', fish: lproducts});  //products refere-se ao arquivo product.ejs que é o arquivo onde as informações serão enviadas | lproducts é o que será rederizado (variável criada acima)
});

// O código abaixo refere-se a página http://localhost:3000/carrinho
router.get('/carrinho', function(req, res, next){
  res.render('carrinho', {title: 'Em Contrução'});  //products refere-se ao arquivo product.ejs que é o arquivo onde as informações serão enviadas | lproducts é o que será rederizado (variável criada acima)
});

// O código abaixo refere-se a página http://localhost:3000/notices onde estarão listados todos os projetos
router.get('/notices', function(req, res, next){
  var lnotices=lista_notice.getNotices();
  res.render('notices', {title: 'Relação de Notícias', dog: lnotices});  //notices refere-se ao arquivo notices.ejs que é o arquivo onde as informações serão enviadas | lnotices é o que será rederizado (variável criada acima)
});

// O código abaixo refere-se a página http://localhost:3000/testimonials onde estarão listados todos os testemunhos
router.get('/testimonials', function(req, res, next){
  var ltestimonials=lista_testimonial.getTestimonials();
  res.render('testimonials', {title: 'Relação de Testemunhos', horse: ltestimonials});  //testimonials refere-se ao arquivo testimonials.ejs que é o arquivo onde as informações serão enviadas | ltestimonials é o que será rederizado (variável criada acima)

});
//================================================================================================================

module.exports = router;
