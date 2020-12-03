
/* FORMULARIO botão limpar */

$(document).ready(function(){

	$("#bLimpar").click(function(){

		$("fNome").val("");
		$("fSobrenome").val("");
		$("fEmail").val("");
		$("fEndereco").val("");
		$("fIdade").val("");
		$("fAltura").val("");
		$("fPeso").val("");
		$("fCPF").val("");
		$("fRG").val("");
		$("fNome").focus("");

	});

});

dados = [];

aux = [];
aux.push("Rian");
aux.push("Santos");
aux.push("riansantos@email.com.br");

dados.push(aux);

aux = [];
aux.push("Suzi");
aux.push("Silva");
aux.push("suzisilva@email.com.br");

dados.push(aux);

aux = [];
aux.push("Luna");
aux.push("Oliveiras");
aux.push("lunaoliveira@email.com.br");

dados.push(aux);

console.log(dados);

