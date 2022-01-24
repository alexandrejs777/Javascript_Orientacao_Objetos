class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  /* #saldo = 0; Atributo privado aguardando a aceitação da convenção. https://github.com/tc39/proposal-class-fields#private-fields */
  _saldo = 0; /* Essa é a convenção atual, mas o atributo não é privado na prática. 
  O underline antes do atributo só indica que se trata de uma variável privada. */

  depositar(valor) {
    if (valor > 0) return;
    this._saldo += valor;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Alexandre";
cliente1.cpf = 11122233301;

const cliente2 = new Cliente();
cliente2.nome = "Bruna";
cliente2.cpf = 88822233301;

const contaCorrenteAlexandre = new ContaCorrente();
contaCorrenteAlexandre._saldo = 5000;
contaCorrenteAlexandre.agencia = 1001;

contaCorrenteAlexandre.depositar(100);
const valorSacado = contaCorrenteAlexandre.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteAlexandre);
