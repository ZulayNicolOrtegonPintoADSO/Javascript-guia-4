addEventListener("DOMContentLoaded", ()=>{
  //8. Diseñar un pseudocódigo que calcule el promedio ponderado para alumno del ITT. El cálculo se hace de la siguiente forma:
  // Se multiplica cada calificación por los créditos de cada materia
  // El resultado anterior se suma con los resultados de todas las materias, por separado se suman los créditos de cada materia y finalmente se divide la suma de todas las materias por sus respectivos créditos, entre la suma de todos los créditos. (materias: Fundamentos, BD y ética).

  i=1
  let a = prompt("Cantidad de alumnos:")

  while (i <= a){
    i += 1
    let cal = prompt("Calificación:")
    let cf = prompt("Crédito matería fundamentos:")
    let cBD = prompt("Crédito materia BD:")
    let ce = prompt("Crédito materia ética:")
    let fundamentos = prompt("Crédito materia fundamentos:")
    let BD= prompt("nota final materia BD:")
    let etica = prompt("nota final materia ética:")
    p1=cal*cf*cBD*ce
    p2=p1+fundamentos+BD+etica
    p3=(cf+cBD+ce)/3

    console.log(`R paso 1  ${p1} \n R paso 2 ${p2} \n R paso 3 ${p3}`)
    
  }
})