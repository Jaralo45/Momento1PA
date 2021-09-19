let total= 0;
let i = 0;

function sables(){
    let datos=[2,-3,5,-1,-6];

    for (i=0;i<datos.length;i++){
         if (datos[i]<0){
             total ++;
         }  
    }
    return(`La cantidad de sables negativos es: ${total}`);
}

console.log(sables());