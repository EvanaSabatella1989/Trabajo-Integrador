// (function(){
//     var formulario = document.getElementsByName('formulario')[0],
//       elementos = formulario.elements,
//       boton = document.getElementById('btn');
//     var validarNombre = function(e) {
//       if (formulario.nombre.value == 0){
//         alert("Completa el campo Nombre");
//         e.preventDefault();
//       }
//     }

//     var validarApellido = function(e) {
//       if (formulario.apellido.value == 0){
//         alert("Completa el campo Apellido");
//         e.preventDefault();
//       }
//     }

//     var validarTelefono = function(e) {
//       if (formulario.tel.value == 0){
//         alert("Debe dejar un numero de Contacto");
//         e.preventDefault();
//       }
//     }

//     var validarMail = function(e) {
//       if (formulario.mail.value == 0){
//         alert("Debe dejar un mail de Contacto");
//         e.preventDefault();
//       }
//     }

    

//     var validar = function(e) {
//       validarNombre(e);
//       validarApellido(e);
//       validarTelefono(e);
//       validarMail(e);
      
//     };

//     formulario.addEventListener("submit",validar);

   
// }())



function mostrarNombreCompleto(event){
    event.preventDefault();
    var nombre = document.getElementById("usr").value;
    var apellido = document.getElementById("lsn").value;
    var nombreCompleto = apellido + " "+ nombre + " gracias por contactarte conmigo te responderé a la brevedad";
    document.querySelector("h1").textContent = nombreCompleto;
}

var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", mostrarNombreCompleto)

