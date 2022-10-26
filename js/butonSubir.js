export default function subirBajar(subir,bajar,numero,varianza=10){
    //e.target.matches(btnPlay)
    const d=document;
    d.addEventListener("click",e=>{
        let valorNumero=d.getElementById(numero).innerHTML;
        if(e.target.matches(subir)){
            if(valorNumero==100) d.getElementById(numero).innerText=10;
            else{
                let newNumero=parseInt(valorNumero) +varianza;
                d.getElementById(numero).innerText=newNumero;
            }
        }
        if(e.target.matches(bajar)){
            if(valorNumero==10) d.getElementById(numero).innerText=100;
            else{
                let newNumero=parseInt(valorNumero) -varianza;
                d.getElementById(numero).innerText=newNumero;
            }
        }
        
    })
    

}