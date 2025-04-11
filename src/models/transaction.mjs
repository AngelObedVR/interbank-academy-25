class Transaction {
  constructor(id, tipo, monto) {
    this.id = id;
    this.tipo = tipo;
    this.monto = parseFloat(monto);
  }

  isCredit() {
    return this.tipo === 'Crédito';
  }

  isDebit() {
    return this.tipo === 'Débito';
  }

  getAmount() {
    return this.isCredit() ? this.monto : -this.monto;
  }
}

export default Transaction;