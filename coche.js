var Coche = /** @class */ (function () {
    function Coche() {
        //Caracteristicas
        this.velocidad = 0;
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
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
