import { relogio } from "./relogio.js";

const input = document.getElementById('inputData');                             // pegando o input=date
const btnIniciar = document.getElementById('BtnIniciar');                       // botão calcular
const btnNovaData = document.getElementById('btnNovaData');                     // botão para escolher uma nova data

let dataFutura = new Date;

input.addEventListener('change', () => {
  
  const valueInput = String(input.value).split('-');                            // converte o valor do input para um array com 3 posições
  
  dataFutura = new Date(`${valueInput[1]} ${valueInput[2]} ${valueInput[0]}`);  // retornar a data futura para ser usada no getTimes.js
  console.log(dataFutura);
});

btnIniciar.addEventListener('click', () => relogio.iniciar(dataFutura));        // inicia a contagem regressiva

btnNovaData.addEventListener('click', () => {                                   // encerra a contagem regrassiva para que o usuário escolha uma nova data
  
  clearInterval(relogio.interval);
  relogio.tempoAtual = relogio.tempoInicial;

  document.getElementById('containerData').style.display = 'flex';
  document.getElementById('containerTempo').style.display = 'none';
});