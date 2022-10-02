addEventListener("DOMContentLoaded", ()=>{
  // 2. Hacer un algoritmo que al ingresar 2 números por la pantalla y se calcule la suma, resta, multiplicación y división. El proceso debe terminar cuando se hallan realizado 10 procesos (Hacer uso de contadores).

  cont=0
  cantidad=10 
  while (cont < cantidad){
    let num1 = Number(prompt("Valor de num1:"))
    let num2 = Number(prompt("Valor de num2:"))
    console.log(`\n La suma de los dos números es ${num1+num2} \n La resta de los dos números es ${num1-num2} \n La multiplicación de los dos números es ${num1*num2} \n La división de los dos números es ${num1/num2} `)
  }
  })