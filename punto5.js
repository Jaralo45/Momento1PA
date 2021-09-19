
function salarioMensual(salario,comision,ventas){
    if(ventas>0){
        return(`El salario mensual de un vendedor es $${((salario+comision)-Math.floor((salario+comision)*5)/100)*ventas}`);
    }
}

console.log(salarioMensual(3500000,1500000,3))