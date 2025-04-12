import FileService from './services/fileService.mjs';
import Formatter from './utils/formatter.mjs';

// Obtener los argumentos de línea de comandos
const args = process.argv.slice(2);
const defaultFilePath = './data/data.csv';
const filePath = args[0] || defaultFilePath;

function main() {
  try {
    console.log(`Procesando archivo: ${filePath}`);
    
    // Leer y procesar transacciones con la opción de encabezados
    const transactions = FileService.readTransactionsFromCSV(filePath);
    
    if (transactions.length === 0) {
      console.log('No se encontraron transacciones en el archivo.');
      return;
    }
    
    // Generar y mostrar el reporte
    const report = Formatter.generateReport(transactions);
    console.log(report);
    
  } catch (error) {
    console.error(`Error en la aplicación: ${error.message}`);
    process.exit(1);
  }
}

// Ejecutar la aplicación
main();