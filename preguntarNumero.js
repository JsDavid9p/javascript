const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntarNumero() {
  readline.question('Ingresa un número (negativo para terminar): ', (entrada) => {
    const numero = parseFloat(entrada);

    if (!isNaN(numero)) {
      if (numero >= 0) {
        const cuadrado = numero * numero;
        console.log(`El cuadrado de ${numero} es: ${cuadrado}`);
        preguntarNumero(); // Volvemos a preguntar por otro número
      } else {
        console.log('¡Número negativo! El programa ha terminado.');
        readline.close(); // Cerramos la interfaz readline
      }
    } else {
      console.log('Por favor, ingresa un número válido.');
      preguntarNumero(); // Volvemos a preguntar por otro número
    }
  });
}

console.log('Programa para calcular el cuadrado de un número.');
preguntarNumero();