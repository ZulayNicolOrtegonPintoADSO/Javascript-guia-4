addEventListener("DOMContentLoaded", ()=>{
  // 7. Una compañía de seguros tiene contratados a n vendedores. Cada uno hace tres ventas a la semana. Su política de pagos es que un vendedor recibe un sueldo base, y un 10% extra por comisiones de sus ventas. El gerente de su compañía desea saber cuanto dinero obtendrá en la semana cada vendedor por concepto de comisiones por las tres ventas realizadas, y cuanto tomando en cuenta su sueldo base y sus comisiones.

  cont=1
  let e = prompt("Cantidad de empleados:")
  let sueldobase = prompt("Sueldo base:")
  diezxc=(sueldobase*10)/100
  comisión=diezxc*3
  total=sueldobase+comisión

  while (cont <= e){
    cont += 1
    let v1 = prompt("Valor venta 1:")
    let v2 = prompt("Valor venta 2:")
    let v3 = prompt("Valor venta 3:")
    console.log(`El 10% de su sueldo es:  ${diezxc} \n La comisión por sus ventas es: ${comisión} \n El valor total a pagar es: ${total}`)
    
  }
})