
export function delay1(mensaje = "sin Mensaje", milisegundos=1000){
    setTimeout(() => {
        console.log(mensaje);
    }, milisegundos);
}

export function delay2(mensaje = "sin Mensaje", milisegundos=1000){
    console.time(mensaje);
    setTimeout(() =>  {
        console.timeEnd(mensaje);
    }, milisegundos);
};

export function run1 (){
    console.log(1);
    delay1('Terminó 1', 1000);
    console.log(2);
    delay1('Terminó 2', 1000);
    console.log(3);
    delay1('Terminó 3', 1000);
}


export function run2 (){
    console.log(1);
    delay1('Terminó 1', 3000);
    console.log(2);
    delay1('Terminó 2', 2000);
    console.log(3);
    delay1('Terminó 3', 1000);
}