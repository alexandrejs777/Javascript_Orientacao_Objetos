export class ContaCorrente {
    agencia;
    cliente;

    /* #saldo = 0; Atributo privado aguardando a aceitação da convenção. https://github.com/tc39/proposal-class-fields#private-fields */
    _saldo = 0; /* Essa é a convenção atual, mas o atributo não é privado na prática. 
    O underline antes do atributo só indica que se trata de uma variável privada. */
  
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

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
  }