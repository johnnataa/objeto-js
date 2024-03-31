const cliente = {
  nome: "John",
  idade: 26,
  email: "john@email.com",
  telefone: ["81999999999", "81888888888"],
};

cliente.enderecos = [
  {
    rua: "Rua Agamenon Magalhães",
    numero: 777,
    apartamento: true,
    complemento: "ap 757",
  },
];

for (let chave in cliente) {
  let tipo = typeof cliente[chave];
  if (tipo !== "object" && tipo !== "function") {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
  }
}
