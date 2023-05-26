
function encriptar(){

    let textNormal = document.getElementById("textNormal").value;
    let textIncrip = textNormal.replace(/e/g, "enter") .replace(/i/g, "imes") .replace(/a/g, "ai") .replace(/o/, "ober") .replace(/u/, "ufat");


    if (textNormal.length != 0 ){

        document.getElementById("text2").value = textIncrip;
        document.getElementById("img2").style.display = "none";
        document.getElementById("mensaje").style.display = "none";

    }

    else{

       window.alert("Introduce un texto");
       document.getElementById("img2").style.display  = "all";

    }

}

function desencriptar(){
    let textNormal = document.getElementById("textNormal").value;
    let textDesent = textNormal.replace(/enter/ig, "e") .replace(/imes/g, "i") .replace(/ai/g, "a") .replace(/ober/g, "o") .replace(/ufat/g, "u");
    
    if (textNormal != 0){

        document.getElementById("text2").value = textDesent;
        document.getElementById("img2").style.display = "none";
        document.getElementById("mensaje").style.display = "none";

    } else{

        alert("Introduce un texto");
    }
}


function copiar (){
    let texto = document.getElementById("text2");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand("copy");
}


var btn1 = document.getElementById("btn1");

btn1.onclick = encriptar;

var btn2 = document.getElementById("btn2");
btn2.onclick = desencriptar;

var btn3 = document.getElementById("btn3");
btn3.onclick = copiar;


