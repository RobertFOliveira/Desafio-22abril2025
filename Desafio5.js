
/////
function Pista7() {
    const radios = document.querySelector('input[name= "Soma1"]:checked');

    if (radios.value === "240") {
        alert("Parabéns! Você acertou, você está indo muito bem.");

    } else {
        alert("Você não acertou desta vez! O resultado da multiplicação é: 240");

    }
}

/////
function Pista8() {
    const radios = document.querySelector('input[name= "Soma2"]:checked');

    if (radios.value === "feliz") {
        alert("Parabéns! Você acertou, você está indo muito bem.");

    } else {
        alert("Você errou, mas não desista continue sempre tentando! A resposta é: feliz");
    }
}

/////
function Pista9() {
    const radios = document.querySelector('input[name= "Soma3"]:checked');

    if (radios.value === "40") {
        alert("Parabéns! Você acertou, você está indo muito bem.");
        alert("Agora vamos para a próxima Pista");
        alert("Sou onde você guarda seu carro ou sua bicicleta. O que sou?");
    } else {
        alert("Você quase que acertou, não desista! Cada amigo receberá: 40");
        alert("Agora vamos para a próxima Pista");
        alert("Sou onde você guarda seu carro ou sua bicicleta. O que sou?");
    }
}
