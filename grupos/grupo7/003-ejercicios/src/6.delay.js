
const delayConPromise = (milisegundos=1000) =>
    new Promise(resolve => setTimeout(resolve("Terminó"), milisegundos));
    

export function runConPromise (){
    let cont = 1;
    delayConPromise(1000)
    .then((msj) => {
        console.log(cont + "\n" + msj + " " + cont);
        cont++;
        return delayConPromise(1000);
    })
    .then((msj) => {
        console.log(cont + "\n" + msj + " " + cont);
        cont++;
        return delayConPromise(1000);
    })
    .then((msj) => {
        console.log(cont + "\n" + msj + " " + cont);
        cont++;
        return delayConPromise(1000);
    })
    .catch(e=>console.log("Error: " + e));
}

export async function runConAsync (){
    try{
        let cont = 1;
        let txt = "";
        txt = await delayConPromise(1000).then((msj)=>msj);
        console.log(cont + "\n" + txt + " " + cont++);
        txt = await delayConPromise(1000).then((msj)=>msj);
        console.log(cont + "\n" + txt + " " + cont++);
    }catch(e) 
    {console.log("Error: " + e)};
}