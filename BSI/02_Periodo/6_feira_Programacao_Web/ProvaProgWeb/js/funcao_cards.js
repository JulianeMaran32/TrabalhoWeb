
var array_viagens = [["Fiji"], ["Maiorca"], ["Maldivas"], ["Noronha"], ["Santorini"]];


$(document).ready(function(){
	fListarViagens();
});

function fListarViagens(){
	
	$(".viagens").html("");

	for(var i = 0; i < array_viagens.length; i++){
		
		var conteudo = "";

		conteudo += '<div class="cards">';
		conteudo += '<div class="poster">';
		conteudo += '<img src="imagens/' + array_viagens[i][0] + '">';
		conteudo += '</div>';
		conteudo += '<div class="titulo">';
		conteudo += '<h3>' + array_viagens[i][0	] + '</h3>';
		conteudo += '</div>';
		conteudo += '</div>';

		$(".viagens").append(conteudo);

	}
}