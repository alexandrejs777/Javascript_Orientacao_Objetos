class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
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
console.log("Valor do saldo inicial:");
contaCorrenteAlexandre.saldo = 0;
contaCorrenteAlexandre.agencia = 1001;

console.log(contaCorrenteAlexandre.saldo);
console.log("Valor do saque:");
contaCorrenteAlexandre.saldo = 100;
console.log(contaCorrenteAlexandre.saldo);
contaCorrenteAlexandre.sacar(250);

console.log("Saldo atualizado:");
console.log(contaCorrenteAlexandre.saldo);
console.log(cliente1);
console.log(cliente2);