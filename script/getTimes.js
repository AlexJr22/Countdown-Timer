const input = document.getElementById('inputData');
let dataFutura = new Date;

input.addEventListener('change', () => {
  
  const valueInput = String(input.value).split('-');

  dataFutura = new Date(`${valueInput[1]} ${valueInput[2]} ${valueInput[0]}`);  // pegando o tempo de uma data futura
  console.log(dataFutura)
});

const timer = {
  dataAtual: new Date(),                      // pegando o tempo atual

  Segundos: () => {
    const segundos = dataFutura.getTime() - timer.dataAtual.getTime();

    return Math.round(segundos / 1000);
  }

};

export { timer };