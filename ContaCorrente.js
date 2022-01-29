import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  agencia;
  _cliente;
  /* #saldo = 0; Atributo privado aguardando a aceitação da convenção. https://github.com/tc39/proposal-class-fields#private-fields */
  _saldo = 0; /* Essa é a convenção atual, mas o atributo não é privado na prática. 
        O underline antes do atributo só indica que se trata de uma variável privada. */


  
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  constructor(cliente, agencia) {
    this.cliente = cliente;
    this.agencia = agencia;
  }

  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
