export default function correrTiempo(inicio,reset,tiempoEjercicio,tiempoDescanzo,realTime){
    const d=document;
    d.addEventListener("click",e=>{
        if(e.target.matches(inicio)){
            const ejercicio=parseInt(d.getElementById(tiempoEjercicio).innerHTML),
                descanzo=parseInt(d.getElementById(tiempoDescanzo).innerHTML);
            const cuentaRegresiva=setInterval(() => {
                let nuevo=ejercicio-1;
                d.getElementById(realTime).innerHTML=nuevo;
            }, 1000);
            }
            

        })

    }