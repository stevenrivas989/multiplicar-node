const fs = require('fs');

let listarTabla = (base,limite=10)=>{
    return new Promise((res,rej)=>{
        if(!Number(base)){
            rej(`La base ${base} no es un número`);
        }

        for(let i = 1;i<=limite;i++){
            console.log( `${base}*${i}=${base * i}\n`);
        }
    })
}

let crearArchivo = (base,limite=10) => {
    return new Promise((res, rej) => {
        console.log(base);
        
        if (!Number(base)) {
            rej(`${base} no es un número`);
        }
        let data = '';

        for (let index = 1; index < limite; index++) {

            data += `${base}*${index}=${base * index}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                rej(err)
            else
                res(`tabla-${base}.txt`)

        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}

