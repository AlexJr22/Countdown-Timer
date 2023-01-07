import { relogio } from "./relogio.js";

const input = document.getElementById('inputData');                             
let dataFutura = new Date;

input.addEventListener('change', () => {

  const valueInput = String(input.value).split('-');                            // converte o valor do input para um array com 3 posições

  dataFutura = new Date(`${valueInput[1]} ${valueInput[2]} ${valueInput[0]}`);  // retornar a data futura para ser usada no getTimes.js
  console.log(dataFutura);
});

const btnIniciar = document.getElementById('BtnIniciar');                       // botão calcular

btnIniciar.addEventListener('click', () => relogio.iniciar(dataFutura));        // inicia a contagem regressiva
