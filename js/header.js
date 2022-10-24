export default function scrollHeader(header_scroll){
    window.addEventListener("scroll",function(){
        var header=document.querySelector(header_scroll);
        header.classList.toggle("abajo",window.scrollY>0);
    })
}
