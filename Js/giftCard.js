function cambiarFondo(valor){
	switch(valor){
		case "rojo":
		document.getElementById("fondo").style.backgroundColor="red";
		break;

		case "verde":
		document.getElementById("fondo").style.backgroundColor="green";
		break;

		case "amarillo":
		document.getElementById("fondo").style.backgroundColor="yellow";
		break;

		case "naranja":
		document.getElementById("fondo").style.backgroundColor="orange";
		break;

		case "lila":
		document.getElementById("fondo").style.backgroundColor="pink";
		break;
	}
}

function nombreDestinatario(){
	var nombreActualizado = "";

	setInterval(function(){
		
		var nombreActualizado = document.getElementById("nombreDelDestinatario").value;
		document.getElementById("nombreD").innerHTML=nombreActualizado;

	},0000);
}

function importeDestinatario(){
	var importe=0;
	setInterval(function(){
		
		var importe = document.getElementById("monto").value;
		document.getElementById("importe").innerHTML="$"+importe;

	},0000);
}

function cambiarColor(valor){
	switch(valor){
		case "negro":
		document.getElementById("nombreD").style.color="black";
		document.getElementById("nombreDD").style.color="black";
		document.getElementById("fondoMonto").style.backgroundColor="black";
		break;

		case "gris":
		document.getElementById("nombreD").style.color="grey";
		document.getElementById("nombreDD").style.color="grey";
		document.getElementById("fondoMonto").style.backgroundColor="grey";
		break;

		case "violeta":
		document.getElementById("nombreD").style.color="purple";
		document.getElementById("nombreDD").style.color="purple";
		document.getElementById("fondoMonto").style.backgroundColor="purple";
		break;

		case "azul":
		document.getElementById("nombreD").style.color="navy";
		document.getElementById("nombreDD").style.color="navy";
		document.getElementById("fondoMonto").style.backgroundColor="navy";
		break;

		case "marino":
		document.getElementById("nombreD").style.color="teal";
		document.getElementById("nombreDD").style.color="teal";
		document.getElementById("fondoMonto").style.backgroundColor="teal";
		break;
	}
}

function cambiarTamanio(valor){
	switch(valor){
		case "20":
		document.getElementById("nombreD").style.fontSize="20px";
		document.getElementById("nombreDD").style.fontSize="20px";
		
		break;

		case "28":
		document.getElementById("nombreD").style.fontSize="28px";
		document.getElementById("nombreDD").style.fontSize="28px";
	
		break;

		case "32":
		document.getElementById("nombreD").style.fontSize="32px";
		document.getElementById("nombreDD").style.fontSize="32px";

		break;

		case "48":
		document.getElementById("nombreD").style.fontSize="48px";
		document.getElementById("nombreDD").style.fontSize="48px";

		break;

		case "60":
		document.getElementById("nombreD").style.fontSize="60px";
		document.getElementById("nombreDD").style.fontSize="60px";
		
		break;
	}
}

