const timer = {
  dataAtual: new Date(),                      // pegando o tempo atual

  Segundos: (dataFutura) => {
    const segundos = dataFutura.getTime() - timer.dataAtual.getTime();

    return Math.round(segundos / 1000);
  }

};

export { timer };