function validar(){
	var error=0;
	var mensajesError='';
    var regex=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var patron=/^\d{4}-\d{4}$/;
    var consulta= document.getElementById("consulta").value;
	
    
	if(document.getElementById('nombre').value==''){
		error++;
		mensajesError+="<p>Debe ingresar un nombre y apellido</p>";
	}
    if(!regex.test(document.getElementById('email').value)){
		error++;
		mensajesError+="<p>El email ingresado no es valido</p>";
	}
	
	/*if (regex.test($("#email").val())==false) {
		error++;
		mensajesError+="<p>El email ingresado no es valido</p>";
	}*/
	
	
	if(!patron.test(document.getElementById("telefono").value)){
            error++;
            mensajesError+="<p>El telefono no tiene el formato correcto</p>";
        }
    if(consulta.length>1000){
        error++;
        mensajesError+="<p>La consulta no puede superar los 1000 caracteres</p>";
    }
    if(error==0){
		return true;
	}else{
		document.getElementById("mensaje").innerHTML=mensajesError;
		return false;
	}
}

function contadorCaracteres(){
	var total = 1000;
	setInterval(function(){
		
		var contador = document.getElementById("consulta").value;
		
		if (contador.length<=total) {
			var restante = total - contador.length;
			document.getElementById("consulta_vista").innerHTML=contador.length+"/1000 - Te quedan: "+restante+ " caracteres";
		}
	},0000);
}