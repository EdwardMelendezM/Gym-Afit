import subirBajar from "./butonSubir.js";
import correrTiempo from "./cronometro.js";
import scrollHeader from "./header.js";
import modeMobile from "./modeMobile.js";

const d=document;

d.addEventListener("DOMContentLoaded",e=>{
    modeMobile(".header-btn",".header-menu");
    scrollHeader("header");
    subirBajar("#subir-ejercicio","#bajar-ejercicio","tiempo-ejercicio",10);
    subirBajar("#subir-descanzo","#bajar-descanzo","tiempo-descanzo",5);
    correrTiempo("#iniciarCronometro","#resetearCronometro","tiempo-ejercicio","tiempo-descanzo","real-time");
})