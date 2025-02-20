// Netflix ou Spotify

// ter acesso a pequenas partes de um arquivo grande
// sem precisar carregar o arquivo inteiro na memória

// Importação de clientes via CSV (excel)   
// o usuario no Front-end (upload) e o CSV é enviado para o Back-end
// atraves de uma rota POST /upload import.csv (por exemplo) 
// se o arquivo for muito grande, o servidor pode travar
// a solução é usar streams, para ler o arquivo em partes 

// CSV é um arquivo de texto, onde cada linha é um registro
// e cada campo é separado por vírgula

// Exemplo de CSV
// nome,idade,email
// João,30,
// Maria,25,

// Writable Streams - para escrever dados
// exemplo: escrever um arquivo de log
// exemplo: escrever um arquivo de backup
// exemplo: escrever um arquivo de cache

// Readable Streams - para ler dados   
// exemplo: ler um arquivo de log
// exemplo: ler um arquivo de backup
// exemplo: ler um arquivo de cache


//process.stdin
//    .pipe(process.stdout) 


import { Readable } from 'node:stream';

class OneToHundredStream extends Readable {
    index = 1;

    _read() { 
        const i = this.index++;

        setTimeout (() => {
            if (i > 100) {
                this.push(null);
            } else {
                this.push(`${i}\n`);
            }
        }, 1000);
    }
}

new OneToHundredStream()
    .pipe(process.stdout);
