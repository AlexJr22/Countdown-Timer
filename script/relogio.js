import { timer } from "./getTimes.js";
import { render } from "./render.js";

const relogio = {
  tempoInicial: 0,
  tempoAtual: 0,
  interval: null,

  iniciar(date) {
    relogio.tempoAtual = timer.Segundos(date);

    if (relogio.tempoAtual <= relogio.tempoInicial) {
      alert("Selecione uma data maior que a data atual!");
      return;
    };
    relogio.interval = setInterval(relogio.cronometro, 1000);
    
    document.getElementById('containerData').style.display = 'none';
    document.getElementById('containerTempo').style.display = 'flex';
  },

  cronometro() {
    render.render();
    
    relogio.tempoAtual -= 1;
    if (relogio.tempoAtual < relogio.tempoInicial) {
      alert("O tempo acabou!");
      clearInterval(relogio.interval);
    };
  },
};

export { relogio };