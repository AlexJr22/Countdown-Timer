import { relogio } from "./relogio.js";

const btnIniciar = document.getElementById('BtnIniciar');

btnIniciar.addEventListener('click', () => relogio.iniciar());
