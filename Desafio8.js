/////
function Pista16(){
    const radios = document.querySelector('input[name= "Soma1"]:checked');

    if (radios.value === "inteligente"){
        alert("Parabéns! Você acertou novamente!.");
       
    }else {
        alert("Você quase que acertou, não desista! A resposta é: inteligente");
        
    }
}
/////
function Pista17(){
    const radios = document.querySelector('input[name= "Soma2"]:checked');

    if (radios.value === "72"){
        alert("Parabéns! Você acertou novamente!.");
        
    }else {
        alert("Você não acertou desta vez, não desista ainda há grande chance! A quantidade de peças de roupa é: 72");
      
    }
}
function Pista18(){
    const radios = document.querySelector('input[name= "Soma3"]:checked');

    if (radios.value === "21075"){
        alert("Parabéns! Você acertou novamente!.");
        alert("Você chegou até aqui e achou o Tesouro. Parabéns pela persistência!");
      
        
    }else {
        alert("Você não acertou desta vez, não desista ainda há grande chance! A quantidade de tijolos que faltam é: 21075");
        alert("Você chegou até aqui e achou o Tesouro. Parabéns pela persistência!");
       
    }
}

