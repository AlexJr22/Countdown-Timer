
const timer = {
  dataAtual: new Date(),                  // pegando o tempo atual
  dataFutura: new Date('11, 12, 2023'),   // pegando o tempo de uma data futura

  secunds: 1000,                          // segundo em milisegundos
  minute: 1000 * 60,                      // minuto em milisecundos
  hour: (1000 * 60) * 60,                 // hora em milisegundos
  day: ((1000 * 60) * 60) * 24,           // day em milisegundos

  Segundos: () => {
    const segundos = timer.dataFutura.getTime() - timer.dataAtual.getTime();

    return Math.round(segundos / timer.secunds);
  }

};

export { timer };