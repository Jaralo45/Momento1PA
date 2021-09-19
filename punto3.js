function calcularTemperatura(datos){
    let datos = [4,5,8,7];
    return(`Luna de Endor`+`\n`+`La mayor temperatura es: ${Math.max(...datos)}`+`\n`+`La menor temperatura es: ${Math.min(...datos)}`+`\n`+`La temperatura promedio es: ${Math.max(...datos)+Math.min(...datos)/2}`);
}
console.log(calcularTemperatura());