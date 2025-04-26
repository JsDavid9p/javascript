const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function jugarAdivinar(numeroSecreto) {
    readline.question('Adivina el número: ', (entrada) => {
      const intento = parseInt(entrada);
  
      if (!isNaN(intento)) {
        if (intento === numeroSecreto) {
          console.log('¡Felicidades! ¡Adivinaste el número!');
          readline.close();
        } else if (intento < numeroSecreto) {
          console.log('Mayor');
          jugarAdivinar(numeroSecreto); // Volvemos a pedir otro intento
        } else {
          console.log('Menor');
          jugarAdivinar(numeroSecreto); // Volvemos a pedir otro intento
        }
      } else {
        console.log('Por favor, ingresa un número válido.');
        jugarAdivinar(numeroSecreto); // Volvemos a pedir otro intento
      }
    });
  }
  
  function iniciarJuego() {
    readline.question('Ingresa el número máximo para el juego: ', (entradaN) => {
      const numeroN = parseInt(entradaN);
  
      if (!isNaN(numeroN) && numeroN > 0) {
        const numeroAleatorio = generarNumeroAleatorio(1, numeroN);
        console.log(`He generado un número secreto entre 1 y ${numeroN}. ¡Intenta adivinarlo!`);
        jugarAdivinar(numeroAleatorio);
      } else {
        console.log('Por favor, ingresa un número máximo válido (mayor que 0).');
        iniciarJuego(); // Volvemos a pedir el número máximo
      }
    });
  }
  
  console.log('¡Bienvenido al juego de adivinar el número!');
  iniciarJuego();