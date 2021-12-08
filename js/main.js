$(document).ready(function() {

//VISUALIZACIÓN
$(".datos-facultad").hide();
$(".solicitud-materias").hide();
$(".fundamento-solicitud").hide();
$(".materias-optativas").hide();
$(".boton-enviar").hide();
$(".datosEnviados").hide();

$("#siguiente1").click(function(){

  $(".datos-estudiante").hide();
  $(".datos-facultad").show();
  $(".solicitud-materias").hide();
  $(".fundamento-solicitud").hide();
  $(".materias-optativas").hide();
  $(".boton-enviar").hide();
  $(".datosEnviados").hide();

});

$("#siguiente2").click(function(){

  $(".datos-estudiante").hide();
  $(".datos-facultad").hide();
  $(".solicitud-materias").show();
  $(".fundamento-solicitud").hide();
  $(".materias-optativas").hide();
  $(".boton-enviar").hide();
  $(".datosEnviados").hide();


});

$("#siguiente3").click(function(){

  $(".datos-estudiante").hide();
  $(".datos-facultad").hide();
  $(".solicitud-materias").hide();
  $(".fundamento-solicitud").show();
  $(".materias-optativas").hide();
  $(".boton-enviar").hide();
  $(".datosEnviados").hide();


});

$("#siguiente4").click(function(){

  $(".datos-estudiante").hide();
  $(".datos-facultad").hide();
  $(".solicitud-materias").hide();
  $(".fundamento-solicitud").hide();
  $(".materias-optativas").show();
  $(".boton-enviar").hide();
  $(".datosEnviados").hide();


});

$("#siguiente5").click(function(){

  $(".datos-estudiante").hide();
  $(".datos-facultad").hide();
  $(".solicitud-materias").hide();
  $(".fundamento-solicitud").hide();
  $(".materias-optativas").hide();
  $(".boton-enviar").show();
  $(".datosEnviados").hide();


});

//CONTADOR DE MATERIAS, MÁXIMO 10

var contadorMateria = 0;

//LEER FORMULARIO

const formulario = document.getElementById("fomrIns");

// DATOS DEL ESTUDIANTE

const datosEstudiante = document.getElementsByClassName("estudianteDatos");
var estudiante = {};

//INFORMACIÓN GENERAL

const datosFacultad = document.getElementsByClassName("facultadDatos");
var facultadInformacion = {};

//MATERIAS CONFIRMADAS

var materiasEnviadas = {};

//AGREGAR MATERIAS

const materiaSolicitada = document.getElementsByClassName("solicitudMateria");
let nuevaMateria = {};

$("#masMateria").click(function(){

  var materiasPedidas = $(".materiasPedidas");
 

  if (contadorMateria < 10){
    contadorMateria = contadorMateria + 1;
 
    for (let i = 0, len = materiaSolicitada.length; i < len; i++) {
      let key = materiaSolicitada[i].getAttribute("dataKey");
      let value = materiaSolicitada[i].value;
      nuevaMateria[key] = value;
      }
      
      $('#materiasPedidas').append(`<p class=materiaPedida keyMateria="Materia${contadorMateria}">${nuevaMateria.Curso} ${nuevaMateria.Cátedra} ${nuevaMateria.Materia} <input type="button" class="remover" value="X"></p>`);

  }
  else {
    
      console.log("límite");
      alert("Límite alcanzado, solo puede agregar 10 materias");
    }
  });

  //REMOVER MATERIA
  $(materiasPedidas).on('click', '.remover', function(e){
    e.preventDefault();
    $(this).parent('p').remove();
    $("#msjErrorMateria").remove();
    contadorMateria--; 
  
});

//MATERIAS CONFIRMADAS

const materiaEnviar = document.getElementsByClassName("materiaPedida");


$("#confirmarMaterias").click(function(){

  //OCULTA ELEMENTOS PARA AGREGAR MATERIAS
  $("#materiaSolicitud").hide();
  //DESHABILITA EL BOTÓN AGREGAR MATERIAS
  $("#masMateria").prop('disabled', true);
  //QUITA EL BOTÓN REMOVER
  $(".remover").hide();
  //QUITA BOTÓN AGREGAR
  $("#masMateria").hide();
  //AGREGA TEXTO
  $("#solicitud-materias").prepend(`<p><b>Materias confirmadas</b></b></p>`);
  //SACA TEXTO
  $(".atencion").hide();
  //QUITA BOTÓN CONFIRMAR
  $("#confirmarMaterias").hide();
  //LEE LAS MATERIAS AGREGADAS

  for (let i = 0, len = materiaEnviar.length; i < len; i++) {
      let key = materiaEnviar[i].getAttribute("keyMateria");
      let value = materiaEnviar[i].textContent;
      materiasEnviadas[key] = value;
      }
  console.log(materiasEnviadas);


  });

//MATERIAS OPTATIVAS

$("input:radio[name=materia-optativa]").change(function() {

  $('#mat-optativas option').remove();

  if (this.value == "2°") {

      $("#mat-optativas").append('<option id="opciones-2°" value="Derecho Informático: lunes de 12 a 14 h.">2° año | Derecho Informático: lunes de 12 a 14 h.</option>');
      $("#mat-optativas").append('<option id="opciones-2°" value="Derecho Informático: lunes de 14 a 16 h.">2° año | Derecho Informático: lunes de 14 a 16 h.</option>');
      $("#mat-optativas").append('<option  id="opciones-2°" value="Instituciones de Derecho Romano: lunes de 12 a 14 h.">2° año | Instituciones de Derecho Romano: lunes de 12 a 14 h.</option>');
      $("#mat-optativas").append('<option  id="opciones-2°" value="Instituciones de Derecho Romano: lunes de 14 a 16 h.">2° año | Instituciones de Derecho Romano: lunes de 14 a 16 h.</option>');
  
  }

  if (this.value == "3°") {
   
    $("#mat-optativas").append('<option value="Derecho Penal Económico: lunes de 14 a 16 h.">3° año | Derecho Penal Económico: lunes de 14 a 16 h.</option>');
    $("#mat-optativas").append('<option value="Derecho y Economía de los Negocios: lunes de 14 a 16 h.">3° año | Derecho y Economía de los Negocios: lunes de 14 a 16 h.</option>');
    $("#mat-optativas").append('<option value="Gestión de la Comunicación Jurídica y con la Prensa: jueves de 18 a 20 h.">3° año | Gestión de la Comunicación Jurídica y con la Prensa: jueves de 18 a 20 h.</option>');

  }
  else if (this.value == "4°") {

    $("#mat-optativas").append('<option "id=opciones-4°" value="Derecho Médico y de la Salud: lunes de 14 a 16 h.">4° año | Derecho Médico y de la Salud: lunes de 14 a 16 h.</option>');
    $("#mat-optativas").append('<option  "id=opciones-4°"  value="Derecho de la Niñez, Adolescencia, Violencia familiar y de género: lunes de 16 a 18 h.">4° año | Derecho de la Niñez, Adolescencia, Violencia familiar y de género: lunes de 16 a 18 h.</option>');
    $("#mat-optativas").append('<option  "id=opciones-4°"  value="Derecho de los medios de Transporte y las telecomunicaciones: lunes de 14 a 16 h.">4° año | Derecho de los medios de Transporte y las telecomunicaciones: lunes de 14 a 16 h.</option>');


  }
});


//ENVIAR FORMULARIO

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  //LEER: DATOS DEL ESTUDIANTE

  for (let i = 0, len = datosEstudiante.length; i < len; i++) {
    let key = datosEstudiante[i].getAttribute("estudianteKey");
    let value = datosEstudiante[i].value;
    estudiante[key] = value;
    }
  
  console.log(estudiante);

  //LEER INFORMACIÓN FACULTAD GENERAL
  
  for (let i = 0, len = datosFacultad.length; i < len; i++) {
    let key = datosFacultad[i].getAttribute("facultadKey");
    let value = datosFacultad[i].value;
    facultadInformacion[key] = value;
    }
  
  console.log(facultadInformacion);

  //LEER FUNDAMENTOS DE MATERIA

  let fundamentoMaterias =  formulario["fundamento-solicitud"].value;
    console.log(fundamentoMaterias);

  // LEER MATERIAS OPTATIVAS

  let materiaOptativa = formulario["materias-optativas"].value;
  console.log(materiaOptativa);

  //OCULTA TODO

  $(".datos-estudiante").hide();
  $(".datos-facultad").hide();
  $(".solicitud-materias").hide();
  $(".fundamento-solicitud").hide();
  $(".materias-optativas").hide();
  $(".boton-enviar").hide();
  $(".datosEnviados").show();

  
  //MUESTRA DATOS ESTUDIANTES
  $.each(estudiante,function(key,value){
  $(".datos-0").append("<p>"+key +": "+value+"</p>");});
  
  //MUESTRA DATOS FACULTAD
  $.each(facultadInformacion,function(key,value){
  $(".datos-1").append("<p>"+key +": "+value+"</p>"); });

  //MUESTRA MATERIAS CONFIRMADAS
  $.each(materiasEnviadas,function(key,value){
  $(".datos-2").append("<p>"+value+"</p>"); });

  //MUESTRA DATOS RESTANTES
  $(".datos-3").append(`<p>${fundamentoMaterias}</p>`);
  $(".datos-4").append(`<p>${materiaOptativa}</p>`);
  });
  formulario.reset();
});