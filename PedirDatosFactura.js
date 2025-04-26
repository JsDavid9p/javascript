const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  async function pedirDatosFactura(numeroFactura) {
    return new Promise(async (resolve) => {
      const factura = {};
  
      factura.codigoArticulo = await preguntar(`Ingrese el código del artículo para la factura ${numeroFactura}: `);
      factura.cantidadLitros = await preguntarNumero(
        `Ingrese la cantidad vendida en litros para la factura ${numeroFactura}: `
      );
      factura.precioPorLitro = await preguntarNumero(
        `Ingrese el precio por litro para la factura ${numeroFactura}: `
      );
  
      factura.importeTotal = factura.cantidadLitros * factura.precioPorLitro;
      resolve(factura);
    });
  }
  
  function preguntar(pregunta) {
    return new Promise((resolve) => {
      readline.question(pregunta, resolve);
    });
  }
  
  function preguntarNumero(pregunta) {
    return new Promise((resolve) => {
      readline.question(pregunta, (respuesta) => {
        resolve(parseFloat(respuesta));
      });
    });
  }
  
  async function gestionarFacturas() {
    const facturas = [];
    for (let i = 1; i <= 5; i++) {
      const factura = await pedirDatosFactura(i);
      facturas.push(factura);
    }
  
    let facturacionTotal = 0;
    let litrosArticulo1 = 0;
    let facturasMayor600 = 0;
  
    for (const factura of facturas) {
      facturacionTotal += factura.importeTotal;
  
      if (factura.codigoArticulo === '1') {
        litrosArticulo1 += factura.cantidadLitros;
      }
  
      if (factura.importeTotal > 600) {
        facturasMayor600++;
      }
    }
  
    console.log('\n--- Resultados de las Facturas ---');
    console.log(`Facturación Total: $${facturacionTotal.toFixed(2)}`);
    console.log(`Cantidad total de litros vendidos del Artículo 1: ${litrosArticulo1.toFixed(2)} litros`);
    console.log(`Cantidad de facturas con importe mayor a $600: ${facturasMayor600}`);
  
    readline.close();
  }
  
  console.log('Programa para gestionar facturas de desinfectantes.');
  gestionarFacturas();