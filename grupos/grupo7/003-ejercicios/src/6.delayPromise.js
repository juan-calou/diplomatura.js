import fetch from 'node-fetch';
import { reset } from 'nodemon';


const cursor = {
    mensajes : ['1','Termino 1','2','Termino 2','3','Termino 3'],
    counter : 0,

    reset() {
        counter = 0;
        return counter;
    },

    nextData(){
        const m = this.mensajes[this.counter];
        this.counter = (this.counter + 1) % this.mensajes.length;
        return m;
    }

}


function delay(seconds=1){
    return new Promise(resolve => {
        setTimeout(()=>
        {
            resolve(cursor.nextData());
        }, seconds*1000)
    }); 
}


export function run(){
    
    let seconds = 2;
    
    delay(seconds)
    .then(res => {
            console.log(res);
            return delay(seconds);
        })
    .then(res => {
        console.log(res);
        return delay(seconds)
        })
    .then(res => {
            console.log(res);
            return delay(seconds)
        })
    .then(res => {
            console.log(res);
            return delay(seconds)
        })
    .then(res => {
        console.log(res);
        return delay(seconds)
        })
    .then(res => console.log(res));
    
}

export async function runAsync(){
    try
    {
        let seconds = 2;
        let res = '';
        res = await delay(seconds);
        console.log(res);
        res = await delay(seconds);
        console.log(res);
        res = await delay(seconds);
        console.log(res);
        res = await delay(seconds);
        console.log(res);
        res = await delay(seconds);
        console.log(res);
        res = await delay(seconds);
        console.log(res);
    }
    catch(error){
        console.log(error);
    }

}