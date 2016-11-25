$('.mostrarPerson').on('click', function() {
   $.ajax({
type: 'GET',
url: 'http://swapi.co/api/people/1/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
var divPerson = document.querySelector("#contPerson");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Altura:
        " + data.height + "<br/>Ano Nasc.: " + data.birth_year +
        "<br/>Genero: " + data.gender + "<br/>";
}});
});


$('.mostrarPlanet').on('click', function() {
   $.ajax({
type: 'GET',
url: 'http://swapi.co/api/people/1/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
var divPerson = document.querySelector("#contPerson");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Altura:
        " + data.height + "<br/>Ano Nasc.: " + data.birth_year +
        "<br/>Genero: " + data.gender + "<br/>";
}});
});



$('.mostrarStarship').on('click', function() {
   $.ajax({
type: 'GET',
url: 'http://swapi.co/api/planets/9/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
var divPerson = document.querySelector("#contPerson");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Altura:
        " + data.height + "<br/>Ano Nasc.: " + data.birth_year +
        "<br/>Genero: " + data.gender + "<br/>";
}});
});