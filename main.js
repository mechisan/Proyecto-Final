window.jsPDF = window.jspdf.jsPDF;


var doc = new jsPDF();
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe

    // Obtén los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var descrip = document.getElementById("descripcion").value;
    let ppto = document.getElementById("presupuesto").value;

    // Crea un nuevo objeto jsPDF
    // var pdf = new jsPDF();

    // Agrega el contenido al PDF
    doc.text(20, 20, "Nombre: " + nombre);
    doc.text(20, 30, "Email: " + email);
    doc.text(20, 40, "Descripcion: " + descrip);
    doc.text(20, 50, "Presupuesto: $" + ppto);

    // Guarda el PDF como un archivo
    doc.save("Presupuesto.pdf");
});

//wizard

document.getElementById("next1").addEventListener("click", function pasoDos() {
    let primero = document.getElementById("step1a");
    let segundo = document.getElementById("step2a");
    
    segundo.classList.toggle("hidden");
    primero.classList.toggle("hidden");

});

document.getElementById("next2").addEventListener("click", function pasoTres() {
    let segundo = document.getElementById("step2a");
    let tercero = document.getElementById("step3a");

    tercero.classList.toggle("hidden");
    segundo.classList.toggle("hidden");

});

document.getElementById("next3").addEventListener("click", function pasoCuatro() {
    let tercero = document.getElementById("step3a");
    let cuarto = document.getElementById("step4a");

    cuarto.classList.toggle("hidden");
    tercero.classList.toggle("hidden");

});

//para cambiar el borde del campo de entrada cuando un usuario lo selecciona (metodo focus con Jquery)
$("input, textarea").focus(function() {
    $(this).css("border", "1px solid #ccc");
  });
  