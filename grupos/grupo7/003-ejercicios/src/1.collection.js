class Collection {
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
     
}

export default Collection;

