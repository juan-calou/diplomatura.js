

export function delay(mensaje = "sin Mensaje", milisegundos=1000){
    console.time(mensaje);
    setTimeout(() =>  {
        console.timeEnd(mensaje);
    }, milisegundos);
};

