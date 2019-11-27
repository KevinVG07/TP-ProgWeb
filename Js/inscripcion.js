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
    	else{$(".a_clonar")[0].reset() }
    });

});


//agregar al total
$(document).ready(function(){
	$("#sumar").click(function(){
		var precioActual=parseInt($("#total").text());
		var precio=4830;
		$("#total").text(precioActual+precio);
	});
	
});
// restar al total
$(document).ready(function(){
		$("#restar").click(function(){
		var precioActual=parseInt($("#total").text());
		var precio=4830;
		if (precioActual==4830){
				$("#total").text(precioActual);
				}
				else{
				$("#total").text(precioActual-precio);	
				} 	
		});
});

//resumen de modal
function capturar(){
	
	     document.getElementsByClassName("datosPersona");
         var arrayGuardar = [];
         var listaInscriptos = "";
           
        for (var i = 0; i < document.getElementsByClassName("datosPersona").length; i++) {    
            arrayGuardar[i] = document.getElementsByClassName("datosPersona")[i].value;
   				} 
   			
   				arrayGuardar.slice();
   		for (var i = 0; i < document.getElementsByClassName("datosPersona").length; i++) {    
            listaInscriptos+="    "+arrayGuardar[i];
            if (i == 2 || i == 5 || i == 8 || i == 11 || i == 14) {
            	listaInscriptos+="<br>";
            }
   			}  			
   			document.getElementById("resultado").innerHTML=listaInscriptos;
        }


$(document).ready(function(){
	$("#mostrarVentana").click(function(){
		$("#miVentana").show();
	});
});



function ocultarVentana(){
    document.getElementById("miVentana").style.display = "none";
}












/*$(document).ready(function(){
	$("#cerrarVentana").click(function(){
		$("#miVentana").hidden();

	});
});*/




/*
function capturar(){
	var nombre=document.getElementById("nombre_1").value;
	var apellido=document.getElementById("apellido_1").value;
	var dni=document.getElementById("dni_1").value;
	document.getElementById("resultado").innerHTML=nombre+" "+apellido+" "+dni;     
}
*/