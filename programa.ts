class Programa{

    public nombre:string;
    public version:string;

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    getVersion(){
        return this.version;
    }

    setVersion(version:string){
        this.version = version;
    }
}


var programas =[];


if(programas.length == 0){



    var listado = <HTMLElement> document.getElementById("list");
    var add_success = <HTMLElement> document.getElementById("add-success");
    var add_error = <HTMLElement> document.getElementById("add-error");


    add_success.style.display= 'none';
    add_error.style.display= 'none';
}

function addError(nombre){
    var error = <HTMLElement> document.getElementById("add-error");
    var message = "El lenguaje de programación " + nombre + " ya se encuentra registrado.";
    error.innerHTML = message;
    error.style.display= '';
}

function addSucces(nombre){
    var success = <HTMLElement> document.getElementById("add-success");
    var message = "El lenguaje de programación " + nombre + " se ha registrado con éxito.";
    success.innerHTML = message;
    success.style.display= '';
}

function deleteSuccess(List,id){
    for(let i = 0; i < List.length ; i++){
        if( i == id){
            var name =  List[i].getNombre();
        }
    }

    var success = <HTMLElement> document.getElementById("add-success");
    var message = "El lenguaje de programación " + name + " se ha eliminado con éxito.";
    success.innerHTML = message;
    success.style.display= '';

}


function findName(List,name){
    for( let i = 0; i < List.length; i ++){
        if(List[i].getNombre() == name){
            return true;
        }else{
            return false;
        }
    }
}

function guardar(){

    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
    var version = (<HTMLInputElement>document.getElementById("version")).value.toString();
    var programa = new Programa();

    programa.setNombre(nombre);
    programa.setVersion(version);


    if(programas.length != 0) {

        if (findName(programas,nombre)) {
            addError(nombre);
        } else {
            programas.push(programa);
            addSucces(nombre);
        }
    }else{
        programas.push(programa);
        addSucces(nombre);
    }

    if(programas.length != 0){
        var listado = <HTMLElement> document.getElementById("list");
        listado.style.display= '';
    }


    var list = "";

    for( var i = 0; i < programas.length; i ++){

        var num = i + 1;
        var th= "<tr><th scope='row'>" + num + "</th>";
        var td_name = "<td>" + programas[i].getNombre() +"</td>";
        var td_version = "<td>" + programas[i].getVersion()+ "</td>";
        var td_accion = "<td><button name=\"delete\" type=\"button\" class=\"btn btn-danger\" onclick=\"eliminar("+ i + ")\">Eliminar</button></td></tr>";

        list = list + th + td_name + td_version + td_accion;
    }


    var listado = <HTMLElement> document.getElementById("list");
    listado.innerHTML = list;

    (<HTMLInputElement>document.getElementById("nombre")).value = "";
    (<HTMLInputElement>document.getElementById("version")).value = "";

}

function eliminar(num){

    deleteSuccess(programas,num);

    programas.splice(num,1);


    var list = "";

    for( var i = 0; i < programas.length; i ++){

        let num = i + 1;
        var th= "<tr><th scope='row'>" + num + "</th>";
        var td_name = "<td>" + programas[i].getNombre() +"</td>";
        var td_version = "<td>" + programas[i].getVersion()+ "</td>";
        var td_accion = "<td><button name=\"delete\" type=\"button\" class=\"btn btn-danger\" onclick=\"eliminar("+ i + ")\">Eliminar</button></td></tr>";

        list = list + th + td_name + td_version + td_accion;
    }

    if(programas.length > 0) {

        var listado = <HTMLElement> document.getElementById("list");
        listado.innerHTML = list;
    }else{
        var listado = <HTMLElement> document.getElementById("list");
        let list = "<tr ><td colspan=\"4\">No hay lenguajes de programación agregados</td></tr>";
        listado.innerHTML = list;
    }


}

