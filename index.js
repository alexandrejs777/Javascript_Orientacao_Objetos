import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Alexandre";
cliente1.cpf = 11122233301;

// const cliente2 = new Cliente();
// cliente2.nome = "Bruna";
// cliente2.cpf = 88822233301;

const conta1 = new ContaCorrente();
conta1.agencia = 1001;
conta1.cliente = cliente1;
conta1.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.cliente.nome = "Bruna";
conta2.cliente.cpf = 88822233301;
conta2.agencia = 120;


conta1.transferir(200, conta2);

console.log(conta2);
console.log(conta1);
