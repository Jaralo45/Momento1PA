
let calcularTemperatura=datos=>(`Luna de Endor`+`\n`+`La mayor temperatura es: ${Math.max(...datos)}`+`\n`+`La menor temperatura es: ${Math.min(...datos)}`+`\n`+`La temperatura promedio es: ${Math.max(...datos)+Math.min(...datos)/2}`);

console.log(calcularTemperatura([4,5,8,7]));
