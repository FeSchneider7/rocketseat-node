
// - criar usuarios
// - listagem de usuarios
// - edição de usuarios
// - remoção de usuarios 

// -HTTP 
//   - Metodo HTTP
//   - URL

// GET - Buscar uma informação dentro do servidor
// POST - Inserir uma informação no servidor
// PUT - Alterar uma informação no servidor (varias informações)
// DELETE - Remover uma informação no servidor
// PATCH - Alterar uma informação especifica/única

//GET /users - Buscar usuarios no Back-End
//POST /users - criar usuario no Back-End

// stateful - Sempre vai ter informação sendo guardada em memoria
// Stateless - Não guarda informação em memoria

//JSON - JavaScript Object Notation

//cabeçalho  (requisição e resposta) = são Metadados 
// Metadados - São dados sobre outros dados
//Exemplo:  Content-Type: application/json (tipo de conteudo que esta sendo enviado)
//Exemplo:  Content-Length: 2 (tamanho do conteudo que esta sendo enviado)

//Corpo (requisição e resposta) = são os dados

// http status code - 1xx, 2xx, 3xx, 4xx, 5xx
// 1xx - Informação (A solicitação foi aceita ou o processo está em andamento)
// 2xx - Sucesso (ok)
// 3xx - Redirecionamento ( ação adicional é necessária para completar a solicitação)
// 4xx - Erro do Cliente (erro do FrontEnd - A solicitação contém sintaxe incorreta ou não pode ser cumprida)
// 5xx - Erro do Servidor (O servidor falhou ao cumprir uma solicitação aparentemente válida)

import http from "http";
import { Database } from "./database.js";
import { json } from "./middlewares/json.js";



const database = new Database 

const server = http.createServer(async (req, res) => {

    const { method, url } = req;

    await json (req, res);

  
    if (method === "GET" && url === "/users") {
        const users = database.select("users")

        return res
        .setHeader('Content-Type', 'application/json')
        .end(JSON.stringify(users));
    } 


    if (method === "POST" && url === "/users") {
        const { name, email} = req.body;
    

      const user = {
            id: 1,
            name,
            email,
        }

        database.insert("users", user)

        return res.writeHead(201) .end();
    }

    return res.writeHead(404).end('Not Found');

}); 

server.listen(3000, () => {
    console.log('✅ Server is running on port 3000 no seu Browser');
});
