# Transacciones CLI

Una aplicación de línea de comandos para procesar y analizar transacciones financieras desde archivos CSV.

## Estructura del Proyecto

```plaintext
transacciones-cli/
├── src/              # Código fuente
│   ├── models/       # Modelos de datos
│   ├── services/     # Servicios (lectura de archivos, etc.)
│   ├── utils/        # Utilidades (formateo, etc.)
│   └── index.js      # Punto de entrada
├── data/             # Archivos de datos
└── README.md         # Documentación
```

## Uso

Crear un archivo CSV con el siguiente formato:

```csv
id,tipo,monto
1,Crédito,100.00
2,Débito,50.00
```

Ejecutar la aplicación:

```bash
node src/index.js [ruta_al_archivo.csv]
```

Si no se proporciona una ruta, se usará por defecto `./data/data.csv`.

## Salida

La aplicación mostrará un reporte con:

- Balance final
- Transacción de mayor monto
- Conteo de transacciones por tipo
