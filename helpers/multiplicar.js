

const fs = require('fs');
const colors = require('colors');


//funsion asincrona callback 
const CrearArchivoTabla = async (base=5, listar=false, hasta) =>{ 

   // return new Promise((resolve, reject )=>{

    try {

        let salida = '' ;

        for(let x = 1; x <= hasta; x++) {
            salida += `${base} * ${x} = ${base * x}\n`;
        }

        if(listar){
            
            console.log('============'.bgCyan)
            console.log(` Tabla del ${base}`.brightCyan)
            console.log('============'.bgCyan)       

            console.log(salida);
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

            return `tabla del ${base} ha sido creada`; 
        
    } catch (err) {
        throw err;
    }

       

        //})

      
    
}

//exportar funsion
module.exports  ={
    CrearArchivoTabla
}



