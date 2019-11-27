$(document).ready(function(){

	$("#precioCurso").click(function(){
		$("#textoPrecioCurso").toggle();
	});

	$("#duracionCurso").click(function(){
		$("#textoDuracionCurso").toggle();
	});

	$("#descripcionCurso").click(function(){
		$("#textoDescripcionCurso").toggle();
	});

	$("#requisitosCurso").click(function(){
		$("#textoRequisitosCurso").toggle();
	})

	
	$("#introduccion").click(function () {
                $("#introduccionParrafo").toggle();
            });
	$("#introduccion1").click(function () {
                $("#introduccionParrafo1").toggle();
            });
	$("#introduccion2").click(function () {
                $("#introduccionParrafo2").toggle();
            });

});