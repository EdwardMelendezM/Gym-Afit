import scrollHeader from "./header.js";
import modeMobile from "./modeMobile.js";

const d=document;

d.addEventListener("DOMContentLoaded",e=>{
    modeMobile(".header-btn",".header-menu");
    scrollHeader("header");
})