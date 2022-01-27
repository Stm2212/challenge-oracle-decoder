var botton = document.querySelector("#button");
var botton2 = document.querySelector("#button2");


// funcion dessencriptar

function encriptar(texto){
    let caracteres = texto.split("");

    for(i=0;i<caracteres.length;i++){

        if (caracteres[i]=== "a"){
            caracteres[i] = "ai";
        } else  if (caracteres[i]=== "e"){
            caracteres[i] = "enter";
        } else  if (caracteres[i]=== "i"){
            caracteres[i] = "imes";
        }else  if (caracteres[i]=== "o"){
            caracteres[i] = "ober";
        }else  if (caracteres[i]=== "u"){
            caracteres[i] = "ufat";
        }
    }
    return caracteres.join("");
    
};

// funcion dessencriptar

function desencriptar(texto){
    let caracteres = texto.split("");

    for(i=0;i<caracteres.length;i++){

        if (caracteres[i] === "a" &&
            caracteres[i+1] === "i"
            ){
            caracteres[i] = "a";
            caracteres.splice(i+1,1);
        } else  if (caracteres[i] === "e" &&
            caracteres[i+1] === "n" &&
            caracteres[i+2] === "t" &&
            caracteres[i+3] === "e" &&
            caracteres[i+4] === "r"
            ){
            caracteres[i] = "e";
            caracteres.splice(i+1,1);
            caracteres.splice(i+1,1);
            caracteres.splice(i+1,1);
            caracteres.splice(i+1,1);
        } else  if (caracteres[i] === "i" &&
            caracteres[i+1] === "m" &&
            caracteres[i+2] === "e" &&
            caracteres[i+3] === "s"
            ){
            caracteres[i] = "i";
            caracteres.splice(i+1,1);
            caracteres.splice(i+1,1);
            caracteres.splice(i+1,1);
        }else  if (caracteres[i] === "o" &&
            caracteres[i+1] === "b" &&
            caracteres[i+2] === "e" &&
            caracteres[i+3] === "r"
            ){
            caracteres[i] = "o";
            caracteres.splice(i+1,1);
            caracteres.splice(i+1,1);
            caracteres.splice(i+1,1);

        }else  if (caracteres[i]=== "u" &&
            caracteres[i+1] === "f" &&
            caracteres[i+2] === "a" &&
            caracteres[i+3] === "t"
            ){
            caracteres[i] = "u";
            caracteres.splice(i+1,1);
            caracteres.splice(i+1,1);
            caracteres.splice(i+1,1);
            }
    }
    return caracteres.join("");
    
};

function botonCopiar(){
    const copyText = document.getElementById("output");
    copyText.select();
    document.execCommand("Copy");
    document.getElementById("output").value=" ";
}

// Boton Encriptar - captura texto  - procesa - devuelve texto

botton.addEventListener("click", function(){

  let caja = document.getElementById("input").value
  let texEncriptado = encriptar(caja);
  document.getElementById("output").value = texEncriptado;
  document.getElementById("input").value=" ";  
})

// Boton Desencriptar - captura texto  - procesa - devuelve texto

botton2.addEventListener("click", function(){
  let caja = document.getElementById("input").value
  let texDesencriptado = desencriptar(caja);
  document.getElementById("output").value = texDesencriptado;
  document.getElementById("input").value=" "; 

})


