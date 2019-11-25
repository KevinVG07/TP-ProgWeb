//clonar y eliminar el formulario
$(document).ready(function(){

    $(".main_planilla_form .clonar").click(function(){
    	var clonar=$(this).parent(".a_clonar").clone(true);
        $(this).parent(".a_clonar").after(clonar);
    });
        
    $(".main_planilla_form .eliminar").click(function(){
    	if($(".a_clonar").length>1){
    	$(this).parent(".a_clonar").remove();
    	}
    });

});


//agregar al total
var cant=1;
$(document).ready(function(){
	$("#sumar").click(function(){
		var precio=4830;
		cant++;
		$("#total").text(precio*cant);
	});
	
});

$(document).ready(function(){
		$("#restar").click(function(){
		var precio=4830;
		$("#total").text(("#total").val()-precio);
	});
});

//MODAL CON RESUMEN

function mostrarVentana(){
	document.getElementById("miVentana").style.display = "block";

}
function ocultarVentana(){
    document.getElementById("miVentana").style.display = "none";
}


/*function capturar(){
	var nombre=document.getElementById("nombre_1").value;
	var apellido=document.getElementById("apellido_1").value;
	var dni=document.getElementById("dni_1").value;
	document.getElementById("resultado").innerHTML=nombre+" "+apellido+" "+dni;     
}*/
