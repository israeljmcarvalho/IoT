var fs = require ('fs'); //biblioteca para gravar  e lê dados do sistema de arquivo
                         // nome da variável fs quer dizer file system

var projectsFilePath = 'db/projects.json';  // variável projectsFilePath criada para mencionar o caminho 
                                                    // do arquivo para não precisar escrever o caminho do arquivo
                                                    // em vários lugares

var loadFileProjects = function () { // Função para carregar do arquivo JSON
    var fileData = fs.readFileSync(projectsFilePath, 'utf8'); // função readFileSync é utilizada quando se vai ler um arquivo (array de bites)
                                                                  // de um diretório, neste caso o diretório projectsFilePath 
                                                                   // Com o comando acima o arquivo é lido mas ainda não se sabe se é 
                                                                  // texto, uma imagem, um json ou qualquer outro tipo
  
    var projects = JSON.parse(fileData); // Este comando converte o arquivo lido acima em um objeto JavaScript
    return projects; 
}

var saveFileProject = function (projects) { // Salvará no arquivo JSON em duas etapas: primeiro convertendo o objeto em formato texto 
                                                    // e depois salvando no arquivo

    var data = JSON.stringify(projects); // Transforma o objeto em memória do JavaScript em um String 
    fs.writeFileSync(projectsFilePath, data, 'utf8');   // Este comando salva em disco o arquivo contido na variável projectsFilePath
}


var getProjects = function(){
//Anteriormente neste bloco estavam os projects "hard code" descritos um a um neste espaço.
//Os projects foram retirados daqui e colocados dentro do arquivo projects.json 

    var projects = loadFileProjects();
    return projects;  

}

var saveProject = function (newProject){ // Salva um novo projeto
    var projects = loadFileProjects();   // Neste passo carrega-se todos os projetos do arquivo
    projects.push(newProject);           // Aqui adiciona-se o novo projeto na lista acima citada 
    saveFileProject(projects);           // Salva a lista no arquivo
}

 
module.exports= {   // Tenho 4 funções mas só as duas abaixo serão visíveis externamente
    getProjects: getProjects,
    saveProject: saveProject
}
