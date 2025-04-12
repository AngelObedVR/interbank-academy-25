class Formatter {
  static formatCurrency(amount) {
    return amount.toFixed(2);
  }

  static generateReport(transactions) {
    // Balance final
    const balance = transactions.reduce((acc, transaction) => {
      return acc + transaction.getAmount();
    }, 0);

    // Transacción de mayor monto
    let maxTransaction = transactions[0];
    transactions.forEach((transaction) => {
      if (Math.abs(transaction.monto) > Math.abs(maxTransaction.monto)) {
        maxTransaction = transaction;
      }
    });

    // Contar transacciones
    const creditCount = transactions.filter((t) => t.isCredit()).length;
    const debitCount = transactions.filter((t) => t.isDebit()).length;

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
