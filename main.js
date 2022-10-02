addEventListener("DOMContentLoaded", ()=>{
  //12. Diseñe un algoritmo que determine el resultado de la elección del representante estudiantil de la universidad X, para ello se presentaron tres candidatos A, B, y C. Para ganar la elección se debe obtener como mínimo el 51%. En caso que no haya un ganador se repite la elección en una segunda vuelta. Van a la segunda vuelta los dos candidatos que obtengan la más alta votación.Se anula la elección en caso de producirse un empate doble por el segundo lugar o un empate triple.

 let a = Number(prompt("CANTIDAD DE VOTOS DEL CANDIDATO A :"))
 let b = Number(prompt("CANTIDAD DE VOTOS DEL CANDIDATO B :"))
 let c = Number(prompt("CANTIDAD DE VOTOS DEL CANDIDATO C :"))

 cv=a+c+b
 console.log(`Cantidad de votos en total = ${cv}`)
 pa=a/cv
 pb=b/cv
 pc=c/cv
 console.log(`Porcentaje a = ${pa} \n Porcentaje b = ${pb} \n Porcentaje c = ${pc}`)

 if(pa == pb & pa == pc){
   console.log(`ANULADA LA ELECCIÓN POR TRIPLE EMPATE`)
 }
 else{
   if(pa == pb & pa == pc){
     console.log(`El candidato A es el ganador`)
   }
   if(pb > 0.51){
     console.log(`El candidato B es el ganador`)  
   }
   if(pc > 0.51){
     console.log(`El candidato C es el ganador`) 
   }

   if(pa == pb){
     console.log(`ANULADO por empate entre los candidatos A y B`) 
   }
   if(pa == pc){
     console.log(`ANULADO por empate entre los candidatos A y C`) 
   }
   if(pb == pc){
     console.log(`ANULADO por empate entre los candidatos B y C`) 
   }
 }

})