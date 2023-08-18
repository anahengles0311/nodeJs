/*Revisão
//sempre que for fazer o require tem que ser no começo do código
//MVC 
1- Criar um servidor HTTP
 */
//Passo 1=> Importar o pacote HTTP
const http = require("http"); //Pega a configuração do HTTP
//Para a leitura de arquivo vamos importar o pacote "fs"
const fs = require("fs");

//Crir uma função que pega dois params: response e o file(nomes ccriados por mim)
function readFile(response, file) {
  fs.readFile(file, function (err, data) {
    console.log(err);
    //responde para o usuário com os dados do arquivo
    response.end(data);
  });
}

//Passo 2 => Criar servidor
const server = http.createServer((request, response) => {
  //Vamos criar os endpoints da API (chamadas que são feitas na API)
  //Dependendo da da regra de negócio, criaremos os nossos
  //endpoints
  if (request.url === "/cars") {
    readFile(response, "cars.json");
  } else if (request.url === "/models") {
    response.end("<html><h1>Modelos carros!</h1></html>");
  } else if (request.url === "/primeiropet") {
    readFile(response, "racasdog.json");
  } else if (request.url === "/modelodepet") {
    response.end("<html><h1>Cachorro não é um objeto</h1></html>");
  } else if (request.url === "/segundopet") {
    readFile(response, "racascat.json");
  } else if (request.url === "/terceiropet"){
    readFile(response, "racashorse.json");
  }else {
    response.end("<html><h1>404 - Not found...</h1></html>");
  }
});

//Passo 3 => abrir a porta do servidor
server.listen(3001, () => {
  console.log("Servidor no ar..."); //local
});

/**Atividade:
 * Criar 4 endpoints relacionado a pets. Cada endpoint precisa estar relacionado
 * a um arquivo json com uma lista com 5 ou mais informações
 */
