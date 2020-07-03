import fetch from 'node-fetch';

export function delayPromise(mensaje,seconds=1){
    return new Promise(function(resolve){
        setTimeout(()=>resolve(mensaje), seconds*1000);
    });
}