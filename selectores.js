const parrafoSombras=document.querySelectorAll("div>p");
const segundoParrafoSombras=parrafoSombras[1];
segundoParrafoSombras.textContent="Párrafo cambiado desde las sombras";

const segundoI=document.querySelector("span>i");
segundoI.classList.add("mistico");
const misticos=document.querySelectorAll(".mistico");
misticos.forEach(element => {
    element.style.color="Red";
});
/*Añadir un nuevo <li><span>Elemento D</span></li> como último hijo del <ul> del HTML cabrón.*/ 

const ul=document.querySelector("ul");
const li=document.createElement("li");
const span=document.createElement("span");
span.textContent="Elemento D";
li.appendChild(span);
ul.appendChild(li);

/*✅ Quita el enlace del <footer> sin usar removeChild*/

const enlace=document.querySelector("a");
enlace.setAttribute("href","");
enlace.textContent="";

/*✅ Resalta con color gold todos los <span> que estén dentro de un <li>*/

const spans=document.querySelectorAll("li span");


spans.forEach(s=>{
    s.style.color="Gold";
});

/*✅ Añade un atributo data-id="1337" al <b> que dice "Hola"*/



/*✅ Elimina el primer <p> (el de "Texto 1") sin usar getElementById ni className*/


