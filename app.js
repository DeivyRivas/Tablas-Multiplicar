//importar libreria para guardar archivos  files system

const {CrearArchivoTabla} = require ('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs'); 

console.clear();//limpia la consola cada que se ejecuta
//console.log( process.argv );
//console.log( argv ); //imprime el objeto del lo que se envia por consola
//console.log('base: yargs', argv.base);//se asigna el valor de base a la variable base
// const [,,arg3='base=5'] =process.argv;
// const [, base = 5] = arg3.split('=');
//let base = 77 ;

CrearArchivoTabla(argv.b, argv.l, argv.h)//se envia argumentos a la funsion multiplicar
    .then( Archivo => console.log(Archivo.rainbow))
    .catch(err => console.log(err));


