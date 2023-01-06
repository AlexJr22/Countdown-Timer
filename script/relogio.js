import { timer } from "./getTimes.js";
import { render } from "./render.js";

const relogio = {
  tempo: 0,

  iniciar() {
    relogio.tempo = timer.Segundos();

    if (relogio.tempo <= 0) {
      alert("Selecione uma data maior que a data atual!");
      return;
    };

    setInterval(relogio.cronometro, 1000);
    
    document.getElementById('containerData').style.display = 'none';
    document.getElementById('containerTempo').style.display = 'flex';
  },

  cronometro() {
    render.render();
    
    relogio.tempo -= 1;
  },
};

export { relogio };