addEventListener("DOMContentLoaded", ()=>{
  // 1. En una granja se requiere saber alguna información para determinar el precio de venta por cada kilo de huevo. precio se determina a traves del promedio de calidad de las N gallinas que hay en la granja. La calidad de cada gallina se obtiene según la formula: calidad = (peso de la gallina * altura de la gallina)/Numero de huevos que pone;

  cont=0
  let gallinas = Number(prompt("¿Cuántas gallinas?"))
  while (cont < gallinas){
    cont += 1
    let peso = Number(prompt("Peso de la gallina:"))
    let altura = Number(prompt("Altura de la gallina:"))
    let huevos = Number(prompt("Número de huevos que pone la gallina:"))
    console.log(`La calidad de la gallina es ${(peso*altura)/huevos}`)
  }
  })