



function mostrarNombreCompleto(event){
    event.preventDefault();
    var nombre = document.getElementById("usr").value;
    var apellido = document.getElementById("lsn").value;
    var nombreCompleto = apellido + " "+ nombre + " gracias por contactarte conmigo te responderé a la brevedad";
    document.querySelector("h1").textContent = nombreCompleto;
}

var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", mostrarNombreCompleto)

