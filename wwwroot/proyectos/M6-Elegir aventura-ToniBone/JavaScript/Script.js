

const op1 = document.querySelectorAll('.op1');
const contenedor1 = document.getElementById('opcion1');
const contenedor2 = document.getElementById('opcion2');
const contenedor3 = document.getElementById('opcion3');
var dragableID;
var html;

function comenzar() {
  document.getElementById("inicio").hidden = true;
  document.getElementById("juego").hidden = false;
}
addEventListener('dragstart', function (event) {
  dragableID = event.target;
});
contenedor1.addEventListener('dragover', function (event) {
  event.preventDefault();

});
contenedor1.addEventListener('drop', function () {
  if (dragableID == document.getElementById('mago')) {
    contenedor1.appendChild(dragableID);
    document.getElementById("mago").draggable = true;
    document.getElementById("guerrero").draggable = false;
    document.getElementById("Guardabosques").draggable = false;

  }
  if (dragableID == document.getElementById('guerrero')) {
    contenedor1.appendChild(dragableID);
    document.getElementById("mago").draggable = false;
    document.getElementById("guerrero").draggable = true;
    document.getElementById("Guardabosques").draggable = false;
  }
  if (dragableID == document.getElementById('Guardabosques')) {
    contenedor1.appendChild(dragableID);
    document.getElementById("mago").draggable = false;
    document.getElementById("guerrero").draggable = false;
    document.getElementById("Guardabosques").draggable = true;
  }
  else {
  }

});

contenedor2.addEventListener('dragover', function (event) {
  event.preventDefault();
});

contenedor2.addEventListener('drop', function () {
  if (dragableID == document.getElementById('cabra')) {
    contenedor2.appendChild(dragableID);
    document.getElementById("cabra").draggable = true;
    document.getElementById("zafiro").draggable = false;
    document.getElementById("iris").draggable = false;
  }
  if (dragableID == document.getElementById('zafiro')) {
    contenedor2.appendChild(dragableID);
    document.getElementById("cabra").draggable = false;
    document.getElementById("zafiro").draggable = true;
    document.getElementById("iris").draggable = false;
  }
  if (dragableID == document.getElementById('iris')) {
    contenedor2.appendChild(dragableID);
    document.getElementById("cabra").draggable = false;
    document.getElementById("zafiro").draggable = false;
    document.getElementById("iris").draggable = true;
  }
  else {
  }


});


contenedor3.addEventListener('dragover', function (event) {
  event.preventDefault();
});
contenedor3.addEventListener('drop', function () {

  if (dragableID == document.getElementById('bosque')) {
    contenedor3.appendChild(dragableID);
    document.getElementById("bosque").draggable = true;
    document.getElementById("heimdal").draggable = false;
    document.getElementById("pantano").draggable = false;
  }
  if (dragableID == document.getElementById('heimdal')) {
    contenedor3.appendChild(dragableID);
    document.getElementById("bosque").draggable = false;
    document.getElementById("heimdal").draggable = true;
    document.getElementById("pantano").draggable = false;
  }
  if (dragableID == document.getElementById('pantano')) {
    contenedor3.appendChild(dragableID);
    document.getElementById("bosque").draggable = false;
    document.getElementById("heimdal").draggable = false;
    document.getElementById("pantano").draggable = true;
  }
  else {
  }

});

function limpiar() {
  var container = document.getElementById("juego");
  container.innerHTML = html;

}

window.onload = function () {
  html = document.getElementById('juego').innerHTML;

};

let cont1 = localStorage = contenedor1;
let cont2 = localStorage = contenedor2;
let cont3 = localStorage = contenedor3;
console.log(cont1);
console.log(cont2);
console.log(cont3);

function final(){
  document.getElementById("juego").hidden = true;
  document.getElementById("fin").hidden = false;

  var parrafo = document.createElement("img");
 
  var nodopadre = document.getElementById("historia").parentNode;
  nodopadre.insertBefore(parrafo,document.getElementById(""));
  if(document.getElementById("mago").draggable == true && document.getElementById("cabra").draggable == true ){
   
    parrafo.setAttribute("src", "img/MagoCabraPantano.PNG");
  }
  else if(document.getElementById("mago").draggable == true && document.getElementById("zafiro").draggable == true ){
   
    parrafo.setAttribute("src", "img/MagoAzulPantano.PNG");
  }
  else if(document.getElementById("mago").draggable == true && document.getElementById("iris").draggable == true ){
   
    parrafo.setAttribute("src", "img/MagoIrisPantano.PNG");
  }


  else if(document.getElementById("guerrero").draggable == true && document.getElementById("cabra").draggable == true){
  
    parrafo.setAttribute("src", "img/GuerreroCabraPantano.PNG");
  }else if(document.getElementById("guerrero").draggable == true && document.getElementById("zafiro").draggable == true){
  
    parrafo.setAttribute("src", "img/GuerreroAzulPantano.PNG");
  }else if(document.getElementById("guerrero").draggable == true && document.getElementById("iris").draggable == true){
  
    parrafo.setAttribute("src", "img/GuerreroIrisPantano.PNG");
  }
  
  
  else if(document.getElementById("Guardabosques").draggable == true && document.getElementById("cabra").draggable == true){
   
    parrafo.setAttribute("src", "img/GuardaCabraPantano.PNG");
  }else if(document.getElementById("Guardabosques").draggable == true && document.getElementById("cabra").draggable == true){
   
    parrafo.setAttribute("src", "img/GuardaCabraPantano.PNG");
  }else if(document.getElementById("Guardabosques").draggable == true && document.getElementById("cabra").draggable == true){
   
    parrafo.setAttribute("src", "img/GuardaCabraPantano.PNG");
  }
  
  


}