addEventListener("DOMContentLoaded", ()=>{
  //11. El Depto. de Seguridad Pública y Transito de desea saber de los n autos que entran a la ciudad de Bogotá, cuantos entran con calcomanía de cada color. Conociendo el último dígito de la placa de cada automóvil se puede determinar el color de la calcomanía utilizando la sig. Relación: DÍGITO COLOR 1 o 2 amarilla 3 o 4 rosa 5 o 6 roja 7 o 8 verde 9 o 0 azul

  i=1
  a=0
  ros=0
  roj=0
  v=0
  az=0
  veh= int(input("Escriba la cantidad de carros que desea registrar"))

  while i <= veh:
      placa=int(input("A continuación escriba el último dígito de la placa: "))

      if placa == 1 or placa == 2:
          print("La placa es de color AMARILLO")
          a += 1
          i += 1
      
      if placa == 3 or placa == 4:
          print("La placa es de color ROSADO")
          ros += 1
          i += 1
        
      if placa == 5 or placa == 6:
          print("La placa es de color ROJO")
          roj += 1
          i += 1
      
      if placa == 7 or placa == 8:
          print("La placa es de color VERDE")
          v += 1
          i += 1
      
      if placa == 9 or placa == 0:
          print("La placa es de color AZUL")
          az += 1
          i += 1


  print("La cantidad de autos registrados fueron:" , veh)
  print("RESULTADOS:  ")
  print("La cantidad de autos de color AMARILLO son:" , a)
  print("La cantidad de autos de color ROSADO son:" , ros)
  print("La cantidad de autos de color ROJO son:" , roj )
  print("La cantidad de autos de color VERDE son:" , v )
  print("La cantidad de autos de color AZUL son:" , az)

})