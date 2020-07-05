class Vector {
    constructor(e1,e2){
        this.x = e1;
        this.y = e2;
    }

    get getX (){return this.x;}

    get getY (){return this.y;}

    sumar (vector) {
        return (new Vector(vector.getX + this.getX,vector.getY + this.getY));
    }

    toString () {
        return "{ x: " + this.getX + " ; y: " + this.getY + " }";
    }
}

export default Vector;