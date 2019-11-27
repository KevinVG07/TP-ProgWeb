	function incrementar(){
			if (localStorage.getItem("totalContador") === null) {
				localStorage.setItem('totalContador',1);
			}else{
				//var nuevoValor =  parseInt(localStorage.getItem('num')) + 1;
				localStorage.setItem('totalContador',parseInt(localStorage.getItem('totalContador'))+1);
			}

			document.getElementById("totalContador").innerHTML=localStorage.getItem('totalContador');
		}
		window.onload=function(){
			if (localStorage.getItem("totalContador") != null) {
				document.getElementById("totalContador").innerHTML=localStorage.getItem('totalContador');
			}
		}
		