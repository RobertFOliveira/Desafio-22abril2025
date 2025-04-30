/////
function Pista14() {
    const radios = document.querySelector('input[name= "Soma1"]:checked');

    if (radios.value === "74") {
        alert("Parabéns! Você acertou novamente!.");

    } else {
        alert("Você quase que acertou, não desista! A resposta é: 74");

    }
}
/////
function Pista15() {
    const radios = document.querySelector('input[name= "Soma2"]:checked');

    if (radios.value === "320") {
        alert("Parabéns! Você acertou novamente!.");

    } else {
        alert("Você quase que acertou, não desista! Cada morador produz por ano em kg: 320");

    }
}
/////
function Pista16() {
    const radios = document.querySelector('input[name= "Soma3"]:checked');

    if (radios.value === "52") {
        alert("Parabéns! Você acertou, você está cada vez mais próximo do tesouro.");
        alert("Agora vamos para a próxima Pista");
        alert("Estou onde você armazena comida e onde o frio é rei. Me abra para ver o que eu tenho a oferecer!");
    } else {
        alert("Você quase que acertou, não desista! Cada morador produz por ano em kg: 52");
        alert("Agora vamos para a próxima Pista");
        alert("Estou onde você armazena comida e onde o frio é rei. Me abra para ver o que eu tenho a oferecer!");
    }
}

