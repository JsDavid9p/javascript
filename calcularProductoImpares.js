function calcularProductoImpares() {
    let producto = 1;
    let contadorImpares = 0;
    let numero = 1;
  
    while (contadorImpares < 10) {
      producto *= numero;
      contadorImpares++;
      numero += 2; // Pasamos al siguiente número impar
    }
  
    console.log(`El producto de los 10 primeros números impares es: ${producto}`);
  }
  
  calcularProductoImpares();