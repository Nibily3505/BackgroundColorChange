function gerarCor(){

let bg=document.getElementById("bg");

let hexa=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

let cor="#";

 
for(var i=0; i< 6 ; i++){

    cor += hexa[Math.floor(Math.random()* 16)];
}

bg.style.backgroundColor= cor;

}

let nIntervId;

function auto() {
    nIntervId = setInterval(gerarCor, 1000);
}
 
function stopTextColor() {
    clearInterval(nIntervId);
  }

/* Não lembrava como usava o for e nem o math.random
e um sinal de '=' errado tinha estragado todo o codigo*/