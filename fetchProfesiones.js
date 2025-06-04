

boton1=document.querySelectorAll("button")[0];
boton2=document.querySelectorAll("button")[1];

boton1.addEventListener("click",mostrarDatos);
boton2.addEventListener("click",ocultarDatos);

function mostrarDatos(){

    if (document.querySelector("ul")) {return};
fetch("personas.json")
.then(res=>res.json())
.then(data=>{
    const gente=data.datos;
    const lista=document.createElement("ul");

    
    gente.forEach(e=>{
        const elementoLista=document.createElement("li");
        elementoLista.innerHTML=`${e.Nombre} - ${e.Profesión}`;
        lista.appendChild(elementoLista);
    });

    document.body.appendChild(lista);
})
.catch();
}

function ocultarDatos(){
  const lista = document.querySelector("ul");
  if (lista) lista.remove();
}

