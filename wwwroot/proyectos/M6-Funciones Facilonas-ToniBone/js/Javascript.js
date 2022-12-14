
function comprobarTextos(){
    
        if (document.getElementById("comprobar1").value === document.getElementById("comprobar2").value){
            document.getElementById("igual").innerHTML="=";
        }else {
            document.getElementById("igual").innerHTML="≠";   
        }
}

function contarLetras(){
    
    if (document.getElementById("palabra").value.length < 31){
        document.getElementById("numeros").textContent=  document.getElementById("palabra").value.length;
    }else{
        window.alert("No puedes mas de 30 letras");
    }
}


function raizCuadrada(obj){
    var num = obj;

    document.getElementById("raizCuadrada").value = Math.sqrt(num.value).toFixed(2);
    
}

function concatenarTextos(){
    var concat1 = document.getElementById("concat1").value; 
    var concat2 = document.getElementById("concat2").value;

    document.getElementById("textosJuntos").value= concat1 + " "+ concat2;  
}

function colorTextoV(){  
        document.getElementById("colorTexto").style.color="green"; 
} 
function colorTextoA(){  
    document.getElementById("colorTexto").style.color="blue"; 
}
function colorTextoR(){  
    document.getElementById("colorTexto").style.color="red"; 
}

function cambiarAltura(){
    document.getElementById("caracol").style.width=document.getElementById("altura").value;
}
function cambiarAnchura(){
    document.getElementById("caracol").style.height=document.getElementById("anchura").value;
}

function adivinaCaracol(adi){
    let cara = "Caracol";
    var palabra = adi;
    for (let index = 0; index < palabra.length; index++) {
        const element = array[index];
        
    }
}
    
    
