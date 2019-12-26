//requireds
const fs = require('fs');
const colors = require('colors');

let data = '';


let listarTabla = async(base, limite = 10) => {


    if (!Number(base)) {
        reject(`el valor asignado ${base} no es numero`);
        return;
    }
    if (!Number(limite)) {
        reject(`el valor asignado ${base} no es numero`);
        return;
    }

    console.log('========================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('========================='.green)

    for (let i = 1; i <= limite; i++) {
        data += (`${base} * ${i} = ${ base * i}\n`);
    }
    return data;
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor base asignado ${base} no es numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`el valor limite asignado ${limite} no es numero`);
            return;
        }



        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${ base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-${limite}.txt`);
        })



    });

}

module.exports = {
    crearArchivo,
    listarTabla
}