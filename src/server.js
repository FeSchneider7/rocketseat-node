import http from "http";

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

const server = http.createServer((req, res) => {

    const { method, url } = req;

    if (method === "GET" && url === "/users") {
        return res.end("Listagem de usuarios");
    } 

    if (method === "POST" && url === "/users") {
        return res.end("Criação de usuario");
    }

}); // 🔴 Fechamento da função estava faltando aqui

server.listen(3000, () => {
    console.log('✅ Server is running on port 3000 no seu Browser');
});
