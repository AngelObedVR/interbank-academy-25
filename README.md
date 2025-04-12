# Transacciones CLI

Una aplicación de línea de comandos para procesar y analizar transacciones financieras desde archivos CSV.

## Introducción

Este proyecto consiste en el procesamiento de datos financieros que permite analizar transacciones de crédito y débito desde archivos CSV. De la misma manera, el propósito es proporcionar una herramienta simple pero efectiva para calcular balances y generar reportes estadísticos básicos sobre las transacciones. Una de las novedades de este código es de que está estructurado, lo cual permite su evolución y manteniemiento a largo plazo.

## Instrucciones de Ejecución

### Requisitos

- Node.js v14 o superior

### Instalación

No se requieren dependencias externas. El proyecto utiliza módulos nativos de Node.js.

### Ejecución

Para procesar un archivo CSV:

```bash
node src/index.mjs [ruta_al_archivo.csv] [opción_encabezados]
```

Parámetros:

- `ruta_al_archivo.csv`: Ruta al archivo CSV (opcional, por defecto: `./data/data.csv`)
- `opción_encabezados`: Usar "noheaders" si el archivo no contiene encabezados (opcional)

Ejemplos:

```bash
# Procesar archivo con encabezados (por defecto)
node src/index.mjs ./data/transacciones.csv

# Procesar archivo sin encabezados
node src/index.mjs ./data/transacciones.csv noheaders
```

## Enfoque y Solución

La aplicación implementa un enfoque modular utilizando:

1. **Modelos de datos**: Encapsulan la lógica de negocio para las transacciones.
2. **Servicios**: Manejan operaciones de I/O como lectura de archivos.
3. **Utilidades**: Proporcionan funciones auxiliares para formateo y análisis.

## Estructura del Proyecto

```plaintext
transacciones-cli/
├── src/              # Código fuente
│   ├── models/       # Modelos de datos
│   │   └── transaction.mjs   # Clase para transacciones
│   ├── services/     # Servicios
│   │   └── fileService.mjs   # Manejo de archivos
│   ├── utils/        # Utilidades
│   │   └── formatter.mjs     # Formateo de reportes
│   └── index.mjs     # Punto de entrada
├── data/             # Archivos de datos
└── README.md         # Documentación
```

## Formato de Datos

El archivo CSV debe tener el siguiente formato:

```csv
id,tipo,monto
1,Crédito,100.00
2,Débito,50.00
```

## Salida

La aplicación mostrará un reporte con:

- Balance final
- Transacción de mayor monto
- Conteo de transacciones por tipo

## Documentación y Calidad del Código

El código sigue las siguientes prácticas:

- **Modularidad**: Separación clara de responsabilidades entre componentes
- **Nombres descriptivos**: Variables y funciones con nombres que explican su propósito
- **Manejo de errores**: Gestión adecuada de excepciones y casos bordes
- **Comentarios**: Documentación de funciones principales y lógica compleja
- **ES Modules**: Uso de sintaxis moderna de JavaScript para importaciones/exportaciones
