addEventListener("DOMContentLoaded", ()=>{
  // 5. El profesor de una materia desea conocer la cantidad de sus alumnos que no tienen derecho al examen de nivelación. Diseñe un pseudocódigo que lea las calificaciones obtenidas en las 5 unidades por cada uno de los 40 alumnos y escriba la cantidad de ellos que no tienen derecho al examen de nivelación.

  cont=1
  cantidad=0 
  while (cont <= 5){
    cont += 1
    let n = prompt("Nombre del estudiante:")
    let c = prompt("¿Tiene derecho al examen?:")
    
    if( c == "no" | c == "NO" | c == "No"){
      console.log(`No tiene derecho al examen de nivelación`)
      cantidad += 1
    }
    else{
      console.log(`SI tiene derecho al examen de nivelación`)
    }
  }
  console.log(`La cantidad de estudiantes que NO tienen derecho al examen de nivelación es ${cantidad}`)
})