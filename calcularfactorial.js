const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function calcularFactorial(numero) {
    if (numero < 0) {
      return "El factorial no está definido para números negativos.";
    } else if (numero === 0) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 1; i <= numero; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  function pedirNumeroYCalcularFactorial() {
    readline.question('Ingresa un número entero no negativo para calcular su factorial: ', (entrada) => {
      const numero = parseInt(entrada);
  
      if (!isNaN(numero) && Number.isInteger(numero)) {
        const resultado = calcularFactorial(numero);
        console.log(`El factorial de ${numero} es: ${resultado}`);
      } else {
        console.log('Por favor, ingresa un número entero no negativo válido.');
        pedirNumeroYCalcularFactorial(); // Volvemos a pedir el número
      }
  
      readline.close(); // Cerramos la interfaz readline después de obtener el resultado
    });
  }
  
  console.log('Programa para calcular el factorial de un número.');
  pedirNumeroYCalcularFactorial();