//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"
var mayuscula=/[A-Z]/g;
var acento=/[àèìòùÀÈÌÒÙ`´áéíóúÁÉÍÓÚ]/g;
var especial=/[/*+¿¡?!"·$%&()=ºª\~¨,.;:<>_"@]/g;

 function encriptar(){
	var mensaje = document.getElementById('text-ingresado').value;
	if (mensaje == "") {
		alert("Ingrese mensaje");
	}
	else if (mensaje.match(mayuscula)) {
		alert("Se encontraron mayusculas");
		document.getElementById('text-ingresado').value = ""; 
	}
	else if (mensaje.match(acento)) {
		alert("Se encontraron acentos");
		document.getElementById('text-ingresado').value = ""; 
	}
	else if (mensaje.match(especial)) {
		alert("Se encontraron caracteres especiales");
		document.getElementById('text-ingresado').value = ""; 
	}
	else{
		var encriptado = mensaje.replace(/e/igm, 'enter');
		encriptado = encriptado.replace(/i/igm, 'imes');
		encriptado = encriptado.replace(/a/igm, 'ai');
		encriptado = encriptado.replace(/o/igm, 'ober');
		encriptado = encriptado.replace(/u/igm, 'ufat');

		document.getElementById('munheco').style.display = "none";
		document.getElementById('sin-mensaje').style.display = "none";
		document.getElementById('texto-mostrado').style.top = "20px";
		document.getElementById('texto-mostrado').style.height = "75%";
		document.getElementById('texto-mostrado').innerHTML = encriptado;
		document.getElementById('copy').style.display = "show";
		document.getElementById('copy').style.display = "inherit";
	}
	
}
function desencriptar(){
	var mensaje = document.getElementById('text-ingresado').value;
	if (mensaje == "") {
		alert("Ingrese mensaje");
	}
	else if (mensaje.match(mayuscula)) {
		alert("Se encontraron mayusculas");
		document.getElementById('text-ingresado').value = ""; 
	}
	else if (mensaje.match(acento)) {
		alert("Se encontraron acentos");
		document.getElementById('text-ingresado').value = ""; 
	}
	else if (mensaje.match(especial)) {
		alert("Se encontraron caracteres especiales");
		document.getElementById('text-ingresado').value = ""; 
	}
	else{
	 desencriptado = mensaje.replace(/enter/igm, 'e');
	 desencriptado = desencriptado.replace(/imes/igm, 'i');
	 desencriptado = desencriptado.replace(/ai/igm, 'a');
	 desencriptado = desencriptado.replace(/ober/igm, 'o');
	 desencriptado = desencriptado.replace(/ufat/igm, 'u');

	 document.getElementById('munheco').style.display = "none";
	 document.getElementById('sin-mensaje').style.display = "none";
	 document.getElementById('texto-mostrado').style.top = "20px";
	 document.getElementById('texto-mostrado').style.height = "500px";
	 document.getElementById('texto-mostrado').innerHTML = desencriptado;
	 document.getElementById('copy').style.display = "show";
	 document.getElementById('copy').style.display = "inherit";
	} 
}
function copiar(){
	var texto = document.getElementById('texto-mostrado');
    
    texto.select();
    document.execCommand('copy');

    alert("Copiado!");
}
