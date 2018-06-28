class Coche{

    //Caracteristicas

    public color:string;
    public modelo: string;
    public velocidad: number = 0;

    public getColor(){
        return this.color;
    }

    public setColor(color:string){
        this.color = color;
    }

    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }

    public getVelocidad(){
        return this.velocidad;
    }
}

var coche = new Coche();
var coche_1 = new Coche();
var coche_2 = new Coche();

coche.setColor("Rojo");
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();

console.log("El color del coche 1 es: " + coche.getColor());
console.log("La velocidad del coche 1 es: " + coche.getVelocidad());

coche.frenar();


console.log("La velocidad del coche 1 es: " + coche.getVelocidad());



coche_1.setColor("Verde");
coche_2.setColor("Azul");
/*console.log("El color del coche 2 es: " + coche_1.getColor());
console.log("El color del coche 3 es: " + coche_2.getColor());*/