import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Alexandre", 11122233301);

const cliente2 = new Cliente("Bruna", 88822233301);

const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500);

const conta2 = new ContaCorrente(cliente2, 120);

conta1.transferir(200, conta2);

// console.log(conta2.saldo);
console.log(cliente1.cpf);
