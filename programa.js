var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Programa;
}());
var programas = [];
if (programas.length == 0) {
    var listado = document.getElementById("list");
    var add_success = document.getElementById("add-success");
    var add_error = document.getElementById("add-error");
    add_success.style.display = 'none';
    add_error.style.display = 'none';
}
function addError(nombre) {
    var error = document.getElementById("add-error");
    var message = "El lenguaje de programación " + nombre + " ya se encuentra registrado.";
    error.innerHTML = message;
    error.style.display = '';
}
function addSucces(nombre) {
    var success = document.getElementById("add-success");
    var message = "El lenguaje de programación " + nombre + " se ha registrado con éxito.";
    success.innerHTML = message;
    success.style.display = '';
}
function deleteSuccess(List, id) {
    for (var i = 0; i < List.length; i++) {
        if (i == id) {
            var name = List[i].getNombre();
        }
    }
    var success = document.getElementById("add-success");
    var message = "El lenguaje de programación " + name + " se ha eliminado con éxito.";
    success.innerHTML = message;
    success.style.display = '';
}
function findName(List, name) {
    for (var i = 0; i < List.length; i++) {
        if (List[i].getNombre() == name) {
            return true;
        }
        else {
            return false;
        }
    }
}
function guardar() {
    var nombre = document.getElementById("nombre").value.toString();
    var version = document.getElementById("version").value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(version);
    if (programas.length != 0) {
        if (findName(programas, nombre)) {
            addError(nombre);
        }
        else {
            programas.push(programa);
            addSucces(nombre);
        }
    }
    else {
        programas.push(programa);
        addSucces(nombre);
    }
    if (programas.length != 0) {
        var listado = document.getElementById("list");
        listado.style.display = '';
    }
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        var num = i + 1;
        var th = "<tr><th scope='row'>" + num + "</th>";
        var td_name = "<td>" + programas[i].getNombre() + "</td>";
        var td_version = "<td>" + programas[i].getVersion() + "</td>";
        var td_accion = "<td><button name=\"delete\" type=\"button\" class=\"btn btn-danger\" onclick=\"eliminar(" + i + ")\">Eliminar</button></td></tr>";
        list = list + th + td_name + td_version + td_accion;
    }
    var listado = document.getElementById("list");
    listado.innerHTML = list;
    document.getElementById("nombre").value = "";
    document.getElementById("version").value = "";
}
function eliminar(num) {
    deleteSuccess(programas, num);
    programas.splice(num, 1);
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        var num_1 = i + 1;
        var th = "<tr><th scope='row'>" + num_1 + "</th>";
        var td_name = "<td>" + programas[i].getNombre() + "</td>";
        var td_version = "<td>" + programas[i].getVersion() + "</td>";
        var td_accion = "<td><button name=\"delete\" type=\"button\" class=\"btn btn-danger\" onclick=\"eliminar(" + i + ")\">Eliminar</button></td></tr>";
        list = list + th + td_name + td_version + td_accion;
    }
    if (programas.length > 0) {
        var listado = document.getElementById("list");
        listado.innerHTML = list;
    }
    else {
        var listado = document.getElementById("list");
        var list_1 = "<tr ><td colspan=\"4\">No hay lenguajes de programación agregados</td></tr>";
        listado.innerHTML = list_1;
    }
}
