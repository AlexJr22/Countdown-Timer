import { timer } from "./getTimes.js";
import { render } from "./render.js";

const relogio = {
  tempo: 0,

  iniciar() {
    relogio.tempo = timer.Segundos();

    setInterval(relogio.cronometro, 1000);
  },

  cronometro() {
    render.render();
    
    relogio.tempo -= 1;
  },
};

export { relogio };