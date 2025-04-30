// Início dos Desafios Perguntas de Matemática e Português.
/////
function Pista4() {
    const radios = document.querySelector('input[name= "Soma1"]:checked');

    if (radios.value === "63") {
        alert("Parabéns! Você acertou a resposta!");
    } else {
        alert("Desta vez você não acertou! O resultado da soma é: 63");

    }
}
/////
function Pista5() {
    const radios = document.querySelector('input[name= "Soma2"]:checked');

    if (radios.value === "um") {
        alert("Parabéns! Você acertou a resposta!");

    } else {
        alert("Você errou mas não desista continue sempre tentando! O artigo correto é: um");

    }
}
/////
function Pista6() {
    const radios = document.querySelector('input[name= "Soma3"]:checked');

    if (radios.value === "9") {
        alert("Parabéns! Você acertou a resposta!");
        alert("Agora vamos para a próxima Pista");
        alert("Sou o lugar onde você toma banho todos os dias para ficar limpinho e cheirosinho.");
        // Pista para o Banheiro
    } else {
        alert("Você quase que acertou, não desista! Cada página terá: 9");
        alert("Agora vamos para a próxima Pista");
        alert("Sou o lugar onde você toma banho todos os dias para ficar limpinho e cheirosinho.");
        // Pista para o Banheiro
    }
}
