const timer = {
  dataAtual: new Date(),                      // pegando o tempo atual

  Segundos: (dataFutura) => {
    const segundos = dataFutura.getTime() - timer.dataAtual.getTime();

    return Math.round(segundos / 1000);       // retorna a diferença de tempo entre a data atual e a data futura em segundos
  }

};

export { timer };