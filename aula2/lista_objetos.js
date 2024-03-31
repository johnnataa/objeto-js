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

cliente.enderecos.push({
  rua: "Rua HMN",
  numero: 1234,
  apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);