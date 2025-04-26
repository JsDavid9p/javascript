const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  async function pedirNumero(pregunta) {
    return new Promise((resolve) => {
      readline.question(pregunta, (respuesta) => {
        resolve(parseFloat(respuesta));
      });
    });
  }
  
  async function obtenerYCalcularEstadisticas() {
    const numeros = [];
    for (let i = 1; i <= 10; i++) {
      const numeroIngresado = await pedirNumero(`Ingresa el número ${i}: `);
      numeros.push(numeroIngresado);
    }
  
    let sumaPositivos = 0;
    let cantidadPositivos = 0;
    let sumaNegativos = 0;
    let cantidadNegativos = 0;
    let cantidadCeros = 0;
  
    for (const numero of numeros) {
      if (numero > 0) {
        sumaPositivos += numero;
        cantidadPositivos++;
      } else if (numero < 0) {
        sumaNegativos += numero;
        cantidadNegativos++;
      } else {
        cantidadCeros++;
      }
    }
  
    const mediaPositivos = cantidadPositivos > 0 ? sumaPositivos / cantidadPositivos : 0;
    const mediaNegativos = cantidadNegativos > 0 ? sumaNegativos / cantidadNegativos : 0;
  
    console.log('\nEstadísticas de los números ingresados:');
    console.log(`Media de los números positivos: ${mediaPositivos}`);
    console.log(`Media de los números negativos: ${mediaNegativos}`);
    console.log(`Cantidad de ceros: ${cantidadCeros}`);
  
    readline.close();
  }
  
  console.log('Programa para calcular estadísticas de 10 números.');
  obtenerYCalcularEstadisticas();