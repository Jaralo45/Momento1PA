function obtenerNombre(codigoNave){
    return(codigoNave.split(":"));
}
console.log(`El nombre del piloto es: ${obtenerNombre("ARQ255:Javier")[1]}`);