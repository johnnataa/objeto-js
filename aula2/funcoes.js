const cliente = {
  nome: "John",
  idade: 26,
  email: "john@email.com",
  telefone: ["81999999999", "81888888888"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if(valor > this.saldo) {
      console.log("Saldo insuficiente");
    } else {
      this.saldo -= valor;
      console.log(`Pagamneto realizado. Novo saldo: ${this.saldo}`);
    }
  },
};

cliente.efetuaPagamento(25);