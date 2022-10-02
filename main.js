addEventListener("DOMContentLoaded", ()=>{
  //10. Se está realizando un estudio del tráfico en una de las calles de su ciudad. Para ello deberá controlar durante un cierto tiempo los vehículos que pasan por dicha calle. Los distintos tipos de vehículo será: Turismo, Autobús, Camión o Motocicleta. Además, si el tipo de vehículo es Turismo debe anotar el número de ocupantes. El programa deberá contar 200 vehículos, e ir guardando cuantos pasan de cada tipo. Finalmente mostrará el porcentaje de cada uno de los tipos.

  i=0
  t=0
  a=0
  c=0
  m=0

  while (i < 201){
      console.log("Los distintos tipos de vehículo será: 1)Turismo, 2)Autobús, 3)Camión o 4)Motocicleta.")
      tipo=int(input())

      if (tipo==1){
        console.log("ESCOGIÓ LA OPCIÓN TURISMO")
        t += 1 
        i += 1
        console.log(" La cantidad de vehículos de esta categoria que van hasta el momento son: " , t)
      }
      if (tipo==2){
        console.log("ESCOGIÓ LA OPCIÓN AUTOBÚS")
        a += 1 
        i += 1
        console.log(" La cantidad de vehículos de esta categoria que van hasta el momento son: " , a)
      }
      if (tipo==3){
        console.log("ESCOGIÓ LA OPCIÓN CAMIÓN")
        c += 1 
        i += 1
        console.log(" La cantidad de vehículos de esta categoria que van hasta el momento son: " , c)
      }
      if (tipo==4){
        console.log("ESCOGIÓ LA OPCIÓN MOTOCICLETA")
        m += 1 
        i += 1
        console.log(" La cantidad de vehículos de esta categoria que van hasta el momento son: " , m)
      }
      if (tipo < 1 | tipo > 4){
          console.log("ESA OPCIÓN NO ESTÁ DISPONIBLE")
      }
  }
  pt=t/i*100
  pa=a/i*100
  pc=c/i*100
  pm=m/i*100

  console.log("El porcentaje de vehículos de tipo turismo es:  " , pt)
  console.log("El porcentaje de vehículos de tipo autobús es:  " , pa)
  console.log("El porcentaje de vehículos de tipo camión es:  " , pc)
  console.log("El porcentaje de vehículos de tipo motocicleta es:  " , pm)

  console.log("EJECUTADO CON EXITO")

})