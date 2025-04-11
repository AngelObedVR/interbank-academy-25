class Formatter {
  static formatCurrency(amount) {
    return amount.toFixed(2);
  }

  static generateReport(transactions) {
    // Calcular el balance final
    const balance = transactions.reduce((acc, transaction) => {
      return acc + transaction.getAmount();
    }, 0);

    // Encontrar la transacción de mayor monto
    let maxTransaction = transactions[0];
    transactions.forEach((transaction) => {
      if (Math.abs(transaction.monto) > Math.abs(maxTransaction.monto)) {
        maxTransaction = transaction;
      }
    });

    // Contar transacciones por tipo
    const creditCount = transactions.filter((t) => t.isCredit()).length;
    const debitCount = transactions.filter((t) => t.isDebit()).length;

    // Generar el reporte formateado
    return `
      Reporte de Transacciones
      ---------------------------------------------
      Balance Final: ${this.formatCurrency(balance)}
      Transacción de Mayor Monto: ID ${maxTransaction.id} - ${this.formatCurrency(maxTransaction.monto)}
      Conteo de Transacciones: Crédito: ${creditCount} Débito: ${debitCount}
      `;
  }
}

export default Formatter;
