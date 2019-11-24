//clonar y eliminar el formulario
$(document).ready(function(){

    $(".formulario .clonaar").click(function(){
    	var clonar=$(this).parent(".a_clonar").clone(true);
        $(this).parent(".a_clonar").after(clonar);
    });
        
    $(".formulario .eliminar").click(function(){
    	if($(".a_clonar").length>1){
    	$(this).parent(".a_clonar").remove();
    	}
    });
});

//seleccion multiple
$(document).ready(function(){
	$(".seleccion-curso").select2({
  	tags: true
	});
});















//para probar si andan los botones clonar y eliminar
$(document).ready(function(){

	$(".mensaje").click(function(){
		alert("el boton anda");
		});
});