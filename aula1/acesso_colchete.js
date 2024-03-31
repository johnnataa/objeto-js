const cliente = {
  nome: "John",
  idade: 26,
  cpf: "1122233345",
  email: "john@email.com",
};

console.log(
  `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`
);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})