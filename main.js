addEventListener("DOMContentLoaded", ()=>{
  // 4. 42 personas toman parte de un baile. Durante la fiesta una dama bailó con 7 caballeros, una segunda dama con 8, una tercera con 9, y así sucesivamente hasta que la última bailó con todos los hombres. Cuantas damas había en el baile?

  cont=7
  acum=0
  while (cont <= 42){
    cont += 1
    acum += 1 
  }
  console.log(`Habían ${acum} damas en el baile`)
})