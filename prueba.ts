function holaMundo(nombre) {
    return "Hola Mundo!! Soy " + nombre;
}

var nombre = "Luis Eulacio";
var resultado = holaMundo(nombre);

var tag = <HTMLElement>document.getElementById("container");
tag.innerHTML = resultado;

//Variables y tipos

var nombre:string = "Luis Eulacio";
var edad:number = 27;
var Programador:boolean = true;
var programas:Array<string> = ['PHP','Javascript','C++'];




tag.innerHTML = "Nombre: " + nombre + " Edad: " + edad;

// let variable dentro del entorno
// var variable global

var a = 7;
var b = 12;

if(a === 7){
    let a = 4;
    var b = 15;
}

console.log("El valor de a:" + a);
console.log("El valor de b:" + b);


//Funciones y tipado

function returnNumber(number:number):string{
    return "Este es un numero " + number;
}

function returnString(text:string):number{
    if(text == "hola"){
        return 55;
    }else{
        return 44;
    }
}

