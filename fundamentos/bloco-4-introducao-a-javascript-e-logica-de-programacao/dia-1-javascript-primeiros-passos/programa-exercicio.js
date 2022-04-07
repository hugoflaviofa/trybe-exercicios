const pecaDeXadrez = "TOrrE";

switch(pecaDeXadrez.toLowerCase()) {
    case "rei": console.log("Movimento em qualquer direção, porém apenas uma casa por vez");
        break;
    case "Rainha": console.log("Movimento em qualquer direção, quantas casas quiser");
        break;
    case "torre": console.log("Movimento em linha reta, quantas casas quiser");
        break;
    case "bispo": console.log("Movimento na diagonal, quantas casas quiser");
        break;
    case "cavalo": console.log("Movimento em L");
        break;
    case "peão": console.log("Movimento para frente, uma casa por vez");
        break;
}