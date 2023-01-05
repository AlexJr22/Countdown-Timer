import { relogio } from "./relogio.js";

const btnIniciar = document.getElementById('BtnIniciar');

btnIniciar.addEventListener('click', () => {
  relogio.iniciar();
  document.getElementById('containerData').style.display = 'none';
  document.getElementById('containerTempo').style.display = 'flex';
});
