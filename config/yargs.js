
//configuracion del yargs 
const argv = require('yargs')
                    .option('b',{
                        alias:'base',
                        type: 'number',
                        demandOption: true,
                        describe:'es la base de la tabla de multiplicar'

                    })
                    .option('l',{
                        alias:'listar',
                        type: 'boolean',
                        default:false,
                        describe:'muestra en consola la tabla'

                    })
                    .option('h',{
                        alias:'hasta',
                        type: 'number',
                        default: 10,
                        //demandOption: true,
                        describe:'limete de impresion de tabla'

                    })
                    .check((argv,option) =>{
                        if(isNaN(argv.b)){
                            throw'la bese debe ser un numero '
                        }
                        return true;
                    })
                    .argv;

module.exports=argv; // se exporta la fusion 