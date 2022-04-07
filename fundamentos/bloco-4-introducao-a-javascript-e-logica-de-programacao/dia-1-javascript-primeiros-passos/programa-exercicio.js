const a = 80;
const b = 70;
const c = 20;

// Sabemos que a soma dos ângulos de um triângulo equivale a 180 graus e que o ângulo deve ser > 0 e < 180, logo:

if (a >= 180 || b >= 180 || c >= 180) {
    console.log("Angulo inválido");
} else if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Angulo inválido");
} else {
    if (a + b + c == 180) {
        console.log("true");
    } else {
        console.log("false")
    }
}
