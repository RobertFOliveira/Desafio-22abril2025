// Início dos Desafios Perguntas de Matemática e Português.
function Pista1() {
    const radios = document.querySelector('input[name= "Soma1"]:checked');

    if (radios.value === "1.869") {
        alert("Parabéns! Você acertou a soma!");
    } else {
        alert("Desta vez você não acertou! O resultado da soma é: 1869");
    }
}
/////
function Pista2() {
    const radios = document.querySelector('input[name= "Soma2"]:checked');

    if (radios.value === "47") {
        alert("Parabéns! Você acertou a soma!");
    } else {
        alert("Desta vez você não acertou! O resultado da soma é: 47");
    }
}
/////
function Pista3() {
    const radios = document.querySelector('input[name= "Soma3"]:checked');

    if (radios.value === "fui") {
        alert("Parabéns! Você acertou a resposta!");
        alert("Agora vamos para a próxima Pista");
        alert("Sou um lugar aconchegante onde tem cama e cobertor e travesseiro para o seu descanso.");
        // Pista para o Quarto
    } else {
        alert("Desta vez você não acertou! O verbo no passado é: fui");
        alert("Agora vamos para a próxima Pista");
        alert("Sou um lugar aconchegante onde tem cama e cobertor e travesseiro para o seu descanso.");
        // Pista para o Quarto
        
    }
}
