function gestionaClick(event) {
    event.preventDefault();
    console.log("Enlace pulsado");
}
function risaMalvada(event) {
	miboton.onlick=console.log("MUAHAHAHAHAHAHA");
}
function loaded(event) {
	window.addEventListener("load", init);
	console.log("Página cargada");
}
function init(event){
    console.log('La página se ha cargado completamente');
}
window.addEventListener("load", init);
function domCargado (event) {
	console.log("DOM cargado");
	document.getElementById("mienlace").addEventListener("click",gestionaClick)
 	 miboton.onclick=risaMalvada
}
document.addEventListener("DOMContentLoaded", domCargado);
