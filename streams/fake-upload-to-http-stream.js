import { Readable } from 'node:stream';

class OneToHundredStream extends Readable {
    index = 1;

    _read() { 
        const i = this.index++;

        setTimeout(() => {
            if (i > 5) {
                this.push(null);
            } else {
                this.push(`${i}\n`);
            }
        }, 1000);
    }
}

fetch('http://localhost:3334', {
    method: 'POST',
    body: new OneToHundredStream(),
    duplex: 'half', // 🔥 Corrige o erro no Node.js 18+
    headers: { 'Content-Type': 'text/plain' } // Opcional, mas ajuda no servidor
}).then(response => {
    return response.text()
  }) .then(data =>{
    console.log(data)
  })