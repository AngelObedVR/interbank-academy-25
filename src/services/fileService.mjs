import fs from 'fs';
import path from 'path';
import Transaction from '../models/transaction.mjs';

class FileService {
  static readTransactionsFromCSV(filePath, hasHeaders = true) {
    try {
      const absolutePath = path.resolve(filePath);
      const fileContent = fs.readFileSync(absolutePath, 'utf8');

      // Dividir el contenido por líneas y eliminar espacios en blanco
      const lines = fileContent
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line);

      // Procesar según si tiene encabezados o no
      let dataLines;
      if (hasHeaders) {
        // Extraer los encabezados y removerlos de las líneas
        const headers = lines[0].split(',');
        dataLines = lines.slice(1);
        console.log(`Encabezados encontrados: ${headers.join(', ')}`);
      } else {
        dataLines = lines;
        console.log('Procesando archivo sin encabezados');
      }

      // Convertir cada línea en un objeto de transacción
      return dataLines.map((line) => {
        const values = line.split(',');
        const id = values[0];
        const tipo = values[1];
        const monto = values[2];

        return new Transaction(id, tipo, monto);
      });
    } catch (error) {
      console.error(`Error al leer el archivo: ${error.message}`);
      process.exit(1);
    }
  }
}

export default FileService;
