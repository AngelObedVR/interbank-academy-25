import fs from 'fs';
import path from 'path';
import Transaction from '../models/transaction.mjs';

class FileService {
  static readTransactionsFromCSV(filePath) {
    try {
      const absolutePath = path.resolve(filePath);
      const fileContent = fs.readFileSync(absolutePath, 'utf8');

      const lines = fileContent
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line);

      // Detectar automáticamente si tiene encabezados
      const firstLine = lines[0].split(',');
      let dataLines = lines;
      let hasHeaders = false;

      // Función auxiliar
      const isNumeric = (str) => {
        return !isNaN(str) && !isNaN(parseFloat(str));
      };

      const allTextHeaders = firstLine.every(item => !isNumeric(item));
      
      if (allTextHeaders && lines.length > 1) {
        hasHeaders = true;
        dataLines = lines.slice(1);
        console.log(`Encabezados detectados: ${firstLine.join(', ')}`);
      } else {
        console.log("No se detectaron encabezados, procesando todos los datos.");
      }

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
