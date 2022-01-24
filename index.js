import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

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
