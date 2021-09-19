let aprendicesPadawans=(edad,actividades)=>{
    if(edad<15){
        console.log(`El aprendiz se llama Clark,del planeta Crypton,con estatura de 1.73`)
        actividades(null);
    }else{
        console.log(`El aprendiz se llama Marvin, del planeta K-9, con estatura de 1.50`)
        actividades("mayor");
    }
}

aprendicesPadawans(16,mayor=>{

    if(mayor){
        console.log("Actividad asignada: Manejo del sable de luz")
    }else{
        console.log("Actividad asignada: Manejo de la fuerza")
    }    
})