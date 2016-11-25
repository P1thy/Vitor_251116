$(document).ready( function() {
	$.ajax({
	type: 'GET',
	url: 'http://swapi.co/api/planets/',
	dataType: 'json',
	data: { get_param: 'value' },
	error: function (erro) {
	alert(erro.responseText);
		},
	success: function(data) {
		var contPlanet = document.querySelector("#contPlanet");
		contPlanet.innerHTML = "";
		$.each(data.results, function(i, obj) {
		contPlanet.innerHTML += '<a href="javascript:Planetas(\'' + obj.url + '\')" >' + obj.name + '</a> <br />';
})
}
})
})

function Planetas(url) {
	$.ajax({
	type: 'GET',
	url: url,
	dataType:'json',
	data: { get_param: 'value' },
	error: function(erro) {
	alert(erro.responseText);
		},
		success: function(data) {
			var informacao = document.querySelector("#informacao");
			informacao.innerHTML = "";
			informacao.innerHTML += "Nome: " + data.name + 
			                       "<br/>Periodo de Rotação:" + data.rotation_period + 
			                       "<br/>Perioro de Orbita: " + data.orbital_period +
								   "<br/>População: " + data.population + 
								   "<br/>";
								   
	}});
}