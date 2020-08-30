/*Script para añadir un relato. Se cogerá el texto
escrito en la página donde el usuario la escribirá y
se pasará a la principal con el formato correspondiente.
Falta aprender SQL para tener una forma más eficiente de 
guardar los textos.*/
function main(){
	var titulo = document.getElementById("nombreTxt").
							value;
	var tipo = document.getElementById("tipoTxt").
							value;
	var texto = document.getElementsByTagName("textarea")[0].
							value;
	console.log(titulo);
	console.log(tipo);
	console.log(texto);
}