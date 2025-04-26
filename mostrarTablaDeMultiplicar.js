const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function mostrarTablaDeMultiplicar(numero) {
    console.log(`\nTabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
    readline.close();
  }
  
  function pedirNumero() {
    readline.question('Ingresa un número entre 0 y 10: ', (entrada) => {
      const numero = parseInt(entrada);
  
      if (!isNaN(numero) && Number.isInteger(numero) && numero >= 0 && numero <= 10) {
        mostrarTablaDeMultiplicar(numero);
      } else {
        console.log('Por favor, ingresa un número entero válido entre 0 y 10.');
        pedirNumero(); // Volvemos a pedir el número si la entrada no es válida
      }
    });
  }
  
  console.log('Programa para mostrar la tabla de multiplicar de un número.');
  pedirNumero();