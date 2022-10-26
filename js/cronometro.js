export default function correrTiempo(inicio,reset,tiempoEjercicio,tiempoDescanzo,realTime){
    const d=document;
    let stopWacthInterval;
    let runtime=0
    d.addEventListener("click",e=>{
        const ejercicio=parseInt(d.getElementById(tiempoEjercicio).innerHTML),
                descanzo=parseInt(d.getElementById(tiempoDescanzo).innerHTML);
        if(e.target.matches(inicio)){
            
                let starTime=Date.now()-runtime;
                stopWacthInterval=setInterval(() => {
                    runtime=Date.now()-starTime;
                    d.getElementById(realTime).innerHTML=Math.floor(runtime/1000)


                if(Math.floor(runtime/1000)==ejercicio){
                    runtime=descanzo+1  
                    clearInterval(stopWacthInterval)
                    let starTime=Date.now()-runtime;
                    
                    stopWacthInterval=setInterval(() => {
                        runtime=Date.now()-starTime;
                        d.getElementById(realTime).innerHTML=descanzo-Math.floor(runtime/1000);
                        if(descanzo-Math.floor(runtime/1000)==0){
                            console.log("entro");
                            clearInterval(stopWacthInterval);
                            runtime=0;
                        }
                        }, 1000);
                    
                    }
                }, 1000);

        }

        if(e.target.matches(reset)){
            clearInterval(stopWacthInterval);
            d.getElementById(realTime).innerHTML=0;
            runtime=0;
        }
        

    })

}