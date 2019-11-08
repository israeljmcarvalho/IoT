multer = require ('multer');
var path = require ('path'); // Path é uma biblioteca do Node para extrair extensão do arquivo  

var storage = multer.diskStorage({
  destination: function(res, file, cb) {
      cb (null, 'public/images/')
  },
  filename: function (req, file, cb){
      var fileExt = path.extname(file.originalname);                // Comando para extrair a extensão
      var fileName = file.fieldname + '-' + Date.now() + fileExt;    // Criei um novo nome do arquivo concatenando o nome original do arquivo file.fieldname
                                                                    // com um traço e com a qdade de segundos que passou deste 1990 até o momento
                                                                    // e com mais a extensão do arquivos fileExt
      cb (null, fileName);
  }
});

var upload = multer ({storage: storage});

module.exports = upload; //Com este é um arquivo JS e todo arquivo JS dentro do Node deve ser exportado a funcionalidade