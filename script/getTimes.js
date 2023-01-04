
const timer = {
  dataAtual: new Date(),                  // pegando o tempo atual
  dataFutura: new Date('11, 12, 2023'),   // pegando o tempo de uma data futura

  Segundos: () => {
    const segundos = timer.dataFutura.getTime() - timer.dataAtual.getTime();

    return Math.round(segundos / 1000);
  }

};

export { timer };