class Collection {
     constructor(e = []){
         this.elements = [];
         e?.forEach(element => {this.elements.push(element);});
     }
     add(e){
         this.elements.push(e);
     }
     has(e){
         return this.elements.includes(e);
     }
     delete(e){
         if (this.has(e)){
             this.elements.splice(this.elements.indexOf(e),1);
             return true;
         }
         return false;
     }
 }


/* class Collection {
    constructor (lista=[]){
        this.elements = lista;
    }

    add(e) {
        return this.elements.push(e);
    } 
    has(e) {
       return this.elements.includes(e);
    }
    delete(e) {
        const position = this.elements.indexOf(e);
        if ( position >= 0){
            this.elements.splice(position,1);
            return true;
        }
        return false;    
    };
     
} */
export default Collection;