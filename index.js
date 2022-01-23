class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Alexandre";
cliente1.cpf = 11122233301;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Bruna";
cliente2.cpf = 88822233301;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);