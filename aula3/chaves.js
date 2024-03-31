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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter um endereço cadastrado!");
}
