fetch("personas.json")
.then(res=>res.json())
.then(data=>{
    const gente=data.datos;
    
    const filtroCasados=gente.filter(casados=>casados.Casado);
   const  filtroSolteros=gente.filter(solteros=>!solteros.Casado);

   const  listaCasados=filtroCasados.map(nombre=>nombre.Nombre);
    const listaSolteros=filtroSolteros.map(nombre=>nombre.Nombre);

    const edades=gente.map(edad=>edad.Edad);
    const edadMaxima=Math.max(...edades);
    const edadMinima=Math.min(...edades);

   const  numeroMaximaEdad=edades.filter(e=>e===edadMaxima);
   const  numeroMinimoEdad=edades.filter(e=>e===edadMinima);

    const mensajes=[`El número de casados es de ${filtroCasados.length}, el numero de solteros es de ${filtroSolteros.length}, los nombres de los casados
        son los siguientes ${listaCasados} y el de los solteros son ${listaSolteros}. La edad máxima que hay registrada en este grupo es ${edadMaxima} y la mínima
        es ${edadMinima}. El número de personas con ${edadMaxima} es de ${numeroMaximaEdad.length} y el número de personas con ${edadMinima} es de ${numeroMinimoEdad.length}`];

        mensajes.forEach(msj=>{

            let mensaje=document.createElement("p");
            mensaje.textContent=msj;
            document.body.appendChild(mensaje);

            let salto=document.createElement("br");
            document.body.appendChild(salto);
            
        });

   
})
.catch(err=>`Hay un problema y el error es el siguiente ${err}`);