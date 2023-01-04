import { timer } from "./getTimes.js";

// elementos que exibirão o tempo
// const Dia = document.getElementById('Dia');
// const Hora = document.getElementById('Hora');
// const Minuto = document.getElementById('Minuto');
// const Segundo = document.getElementById('Segundo');

const relogio = {
  tempo: 0,

  iniciar() {
    relogio.tempo = timer.Segundos();
    setInterval(() => {
      console.log(relogio.tempo);
      relogio.tempo -= 1;
    }, 1000);
  },
};

export { relogio };