var fs = require ('fs'); //biblioteca para gravar  e lê dados do sistema de arquivo
                         // nome da variável fs quer dizer file system

var testimonialsFilePath = 'db/testimonials.json';  // variável testimonialsFilePath criada para mencionar o caminho 
                                                    // do arquivo para não precisar escrever o caminho do arquivo
                                                    // em vários lugares

var loadFileTestimonials = function () { // Função para carregar do arquivo JSON
    var fileData = fs.readFileSync(testimonialsFilePath, 'utf8'); // função readFileSync é utilizada quando se vai ler um arquivo (array de bites)
                                                                  // de um diretório, neste caso o diretório testimonialsFilePath 
                                                                   // Com o comando acima o arquivo é lido mas ainda não se sabe se é 
                                                                  // texto, uma imagem, um json ou qualquer outro tipo
  
    var testimonials = JSON.parse(fileData); // Este comando converte o arquivo lido acima em um objeto JavaScript
    return testimonials; 
}

var saveFileTestimonial = function (testimonials) { // Salvará no arquivo JSON em duas etapas: primeiro convertendo o objeto em formato texto 
                                                    // e depois salvando no arquivo

    var data = JSON.stringify(testimonials); // Transforma o objeto em memória do JavaScript em um String 
    fs.writeFileSync(testimonialsFilePath, data, 'utf8');   // Este comando salva em disco o arquivo contido na variável testimonialsFilePath
}


var getTestimonials = function(){
//Anteriormente neste bloco estavam os testimonials "hard code" descritos um a um neste espaço.
//Os testimonials foram retirados daqui e colocados dentro do arquivo testimonials.json 

    var testimonials = loadFileTestimonials();
    return testimonials;  

}

var saveTestimonial = function (newTestimonial){ // Salva um novo testemunho
    var testimonials = loadFileTestimonials();   // Neste passo carrega-se todos os testemunhos do arquivo
    testimonials.push(newTestimonial);           // Aqui adiciona-se o novo testemunho na lista acima citada 
    saveFileTestimonial(testimonials);           // Salva a lista no arquivo
}

 
module.exports= {   // Tenho 4 funções mas só as duas abaixo serão visíveis externamente
    getTestimonials: getTestimonials,
    saveTestimonial: saveTestimonial
}
