import { relogio } from "./relogio.js";

// elementos que exibirão o tempo
// const Dia = document.getElementById('Dia');
// const Hora = document.getElementById('Hora');
const Minuto = document.getElementById('Minuto');
const Segundo = document.getElementById('Segundo');

const render = {

  tempoEmSegundos: tempo => tempo % 60,
  tempoEmMinutos: tempo => Math.floor(tempo / 60) % 60,
  
  render() {

    Segundo.innerHTML = `
      ${String(render.tempoEmSegundos(relogio.tempo)).padStart(2, "0")}
    `;
    
    Minuto.innerHTML = `
      ${String(render.tempoEmMinutos(relogio.tempo)).padStart(2, "0")}
    `;
  
    
  },
  
}

export { render };