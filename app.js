const http = require("http");
/* 
Verbos HTTP
GET -> Pegando os recursos/dados do servidor
POST -> Utilizamos para gravar recursos

Criar um endpoin signuo que o método seja POST
*/
const server = http.createServer(function (req, res) {
  if (req.url === "/login" && req.method == "POST") {
    console.log("Caiu em data...");
    res.end("Tudo certo por aqui...");
  } else if (req.url === "/signup" && req.method == "POST") {
    var body = "";
    //Forma como o nodejs "escuta" os dados vindo de fora (POST)
    req.on("data", function (data) {
      body = body + data;
    });
    //Verifica se já finalizou
    req.on("end", function () {
      var received = JSON.parse(body);
      console.log(received)
      if(received.email === 'muca@email.com'){
        res.end("Email OK!!")
      }else{
        res.end("Verifique o EMAIL")
      }
    });
    //res.end("OK");
    return;
  } else if (req.url === "/gravar" && req.method == "POST") {
    res.end("Sem autorização!");
    res.statusCode = 401;
  } else {
    res.statusCode = 404;
    res.end("Verifique...");
  }
});

server.listen(3001, () => {
  console.log("Servidor on...");
});
