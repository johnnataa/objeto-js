const cliente = {
  nome: "John",
  idade: 26,
  cpf: "1122233345",
  email: "john@email.com",
};

console.log(
  `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`
);

console.log(`Os 3 primeiros dígitos do CPF são ${cliente.cpf.substring(0, 3)}`);