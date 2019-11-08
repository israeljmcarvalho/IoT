var fs = require ('fs'); //biblioteca para gravar  e lê dados do sistema de arquivo
                         // nome da variável fs quer dizer file system

var productsFilePath = 'db/products.json';  // variável productsFilePath criada para mencionar o caminho 
                                                    // do arquivo para não precisar escrever o caminho do arquivo
                                                    // em vários lugares

var loadFileProducts = function () { // Função para carregar do arquivo JSON
    var fileData = fs.readFileSync(productsFilePath, 'utf8'); // função readFileSync é utilizada quando se vai ler um arquivo (array de bites)
                                                                  // de um diretório, neste caso o diretório productsFilePath 
                                                                   // Com o comando acima o arquivo é lido mas ainda não se sabe se é 
                                                                  // texto, uma imagem, um json ou qualquer outro tipo
  
    var products = JSON.parse(fileData); // Este comando converte o arquivo lido acima em um objeto JavaScript
    return products; 
}

var saveFileProject = function (products) { // Salvará no arquivo JSON em duas etapas: primeiro convertendo o objeto em formato texto 
                                                    // e depois salvando no arquivo

    var data = JSON.stringify(products); // Transforma o objeto em memória do JavaScript em um String 
    fs.writeFileSync(productsFilePath, data, 'utf8');   // Este comando salva em disco o arquivo contido na variável productsFilePath
}


var getProducts = function(){
//Anteriormente neste bloco estavam os products "hard code" descritos um a um neste espaço.
//Os products foram retirados daqui e colocados dentro do arquivo products.json 

    var products = loadFileProducts();
    return products;  

}

var saveProject = function (newProject){ // Salva um novo produto
    var products = loadFileProducts();   // Neste passo carrega-se todos os produtos do arquivo
    products.push(newProject);           // Aqui adiciona-se o novo produto na lista acima citada 
    saveFileProject(products);           // Salva a lista no arquivo
}

 
module.exports= {   // Tenho 4 funções mas só as duas abaixo serão visíveis externamente
    getProducts: getProducts,
    saveProject: saveProject
}
