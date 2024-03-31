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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
  destinatario: cliente.nome,
  ...cliente.enderecos[0],
};

console.log(encomenda);