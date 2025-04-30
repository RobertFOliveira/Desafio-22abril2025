/////
function Pista10(){
    const radios = document.querySelector('input[name= "Soma1"]:checked');

    if (radios.value === "brilha"){
        alert("Parabéns! Você acertou novamente!.");
     
    }else {
        alert("Você errou, mas não desista continue sempre tentando! A resposta é: brilha.");
       
    }
}
/////
function Pista11(){
    const radios = document.querySelector('input[name= "Soma2"]:checked');

    if (radios.value === "48"){
        alert("Parabéns! Você acertou novamente!.");
    
    }else {
        alert("Você não acertou desta vez! O resultado da multiplicação é: 48");
     
    }
}
/////
function Pista12(){
    const radios = document.querySelector('input[name= "Soma3"]:checked');

    if (radios.value === "assistimos"){
        alert("Parabéns! Você acertou novamente!.");
        alert("Agora vamos para a próxima pista.");
        alert("Eu gosto de ninar suas roupas até a hora de usá-las. No meu lugar, há sempre algo novo a se vestir.")
        // Pista Pilha de Roupa
    }else {
        alert("Você errou, mas não desista continue sempre tentando! A resposta é: assistimos.");
        alert("Agora vamos para a próxima pista.");
        alert("Eu gosto de ninar suas roupas até a hora de usá-las. No meu lugar, há sempre algo novo a se vestir.")
        // Pista Pilha de Roupa
    }
}
