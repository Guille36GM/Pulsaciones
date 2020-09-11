function Guardar() {

    var id = document.getElementById("id").value;
    var nombre = document.getElementById("nombre").value;
    var sexo = document.querySelector("#sexo").value;
    var edad = document.getElementById("edad").value;
    var pulsacion = document.getElementById("pulsacion").value;

    var persona = {id: id,nombre: nombre,sexo: sexo,edad: edad,pulsacion: pulsacion};

    var myJSON;

    alert(myJSON = JSON.stringify(persona));
    Limpiar();
    localStorage.setItem(id, myJSON);    
}

function llenarTabla() {

    let res = document.querySelector('#respuesta');
    respuesta.innerHTML = '';

    for (var i = 0; i <= localStorage.length - 1; i++) {

        var text = localStorage.key(i);
        var obj = JSON.parse(localStorage.getItem(text));

        res.innerHTML += `
                    <tr>
                        <td>${obj.id}</td>
                        <td>${obj.nombre}</td>
                        <td>${obj.sexo}</td>
                        <td>${obj.edad}</td>
                        <td>${obj.pulsacion}</td>
                    </tr>
                `

    }
}

function Consultar() {

    var id = document.getElementById("id").value;

    for (var i = 0; i <= localStorage.length - 1; i++) {

        var text = localStorage.key(i);  
        var obj = JSON.parse(localStorage.getItem(text));

        if (id === obj.id) {
            
            document.getElementById("nombre").value = obj.nombre;
            document.getElementById("sexo").value = obj.sexo;
            document.getElementById("edad").value = obj.edad;
            document.getElementById("pulsacion").value = obj.pulsacion;
        }   
    }
}

function Eliminar() {

    var id = document.getElementById("id").value;

    for (var i = 0; i <= localStorage.length - 1; i++) {

        var text = localStorage.key(i);
        var obj = JSON.parse(localStorage.getItem(text));

        if (id === obj.id) {

            localStorage.removeItem(text);
            Limpiar();
        }       
    }
}

function Limpiar() {

    document.getElementById("id").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("pulsacion").value = "";
}





