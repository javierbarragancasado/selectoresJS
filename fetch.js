fetch("personas.json")
.then(res=>res.json())
.then(data=>{
    gente=data.datos;
    /*gente.forEach(e => {
        let parrafo=document.createElement("p");
        parrafo.textContent=`El valor de este objeto es Nombre: ${e.Nombre} los apellidos son : ${e.Apellidos} la edad es : ${e.Edad} ¿Está casado? ${e.Casado}
         la profesión es ${e.Profesión} y la fecha de nacimiento es ${e.FechaNacimiento}`;
        document.body.appendChild(parrafo);
    });*/

   const filtroCasados=gente.filter(c=>c.Casado);
   const filtroSolteros=gente.filter(c=>!c.Casado);

   const listaCasados=filtroCasados.map(s=>s.Nombre);
   const listaSolteros=filtroSolteros.map(s=>s.Nombre);

  const PersonaMayor = gente.reduce((mayor, persona) =>
  persona.Edad > mayor.Edad ? persona : mayor
);

    const edades=gente.map(edad=>edad.Edad);
    const mayor=Math.max(...edades);
    const menor=Math.min(...edades);
    const cantidadMayores=edades.filter(e=>e===mayor).length;
    const cantidadMenores=edades.filter(e=>e===menor).length;

    const sumaEdades=edades.reduce((total,edad)=>total+edad);

   const mensajes=[`El número de personas casadas es ${filtroCasados.length}`, `El de personas solteras es ${filtroSolteros.length} `, `Y la lista de nombres de personas solteras 
    es ${listaCasados}`, `La lista de personas solteras es ${listaSolteros}`, `La persona de mayor edad es ${PersonaMayor.Nombre} con ${PersonaMayor.Edad} años`, `El numero de personas
    con la edad máxima ${mayor} es exactamente de ${cantidadMayores}`,`El número de personas con la edad mínima ${menor} es exactamente de ${cantidadMenores}`,`La suma de todas las edades es
    ${sumaEdades}` ];

   mensajes.forEach(e=>{
    let parrafo=document.createElement("p");
    parrafo.textContent=e;
    document.body.appendChild(parrafo);

   });

  

    
});