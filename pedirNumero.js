const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  async function pedirNumero(pregunta) {
    return new Promise((resolve) => {
      readline.question(pregunta, (respuesta) => {
        resolve(parseInt(respuesta));
      });
    });
  }
  
  async function pedirSueldos(n) {
    const sueldos = [];
    for (let i = 1; i <= n; i++) {
      const sueldo = await pedirNumero(`Ingrese el sueldo #${i}: `);
      sueldos.push(sueldo);
    }
    return sueldos;
  }
  
  function encontrarSueldoMaximo(sueldos) {
    if (sueldos.length === 0) {
      return 'No se ingresaron sueldos.';
    }
    return Math.max(...sueldos);
  }
  
  async function gestionarSueldos() {
    const n = await pedirNumero('Ingrese la cantidad de sueldos a introducir (N): ');
    if (isNaN(n) || !Number.isInteger(n) || n <= 0) {
      console.log('Por favor, ingrese un número entero positivo válido para la cantidad de sueldos.');
      readline.close();
      return;
    }
  
    const sueldos = await pedirSueldos(n);
    const sueldoMaximo = encontrarSueldoMaximo(sueldos);
    console.log(`\nEl sueldo máximo ingresado es: ${sueldoMaximo}`);
  
    // Comenzar el contador especial después de procesar los sueldos
    console.log('\n--- Contador Especial ---');
    mostrarContadorEspecial();
  }
  
  function formatearContador(digitos) {
    return digitos.map(d => (d === 3 ? 'E' : d)).join('-');
  }
  
  function mostrarContadorEspecial() {
    for (let i = 0; i <= 99999; i++) {
      const digitos = String(i).padStart(5, '0').split('').map(Number);
      console.log(formatearContador(digitos));
    }
    readline.close(); // Cerramos readline después de que termine el contador (puede ser mucho output)
  }
  
  console.log('Programa para encontrar el sueldo máximo y mostrar un contador especial.');
  gestionarSueldos();