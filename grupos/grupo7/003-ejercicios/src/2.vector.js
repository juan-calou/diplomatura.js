class Vector{
    constructor (x=0,y=0){
        this.x = x;
        this.y = y;
    }

    get axis_x(){
        return this.x;
    }

    get axis_y(){
        return this.y;
    }

    sumar (v){
        return new Vector(v.axis_x + this.x, v.axis_y + this.y);
    }
}

export default Vector;