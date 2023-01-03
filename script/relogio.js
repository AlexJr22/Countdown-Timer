// elementos que exibirão o tempo
const Dia = document.getElementById('Dia');
const Hora = document.getElementById('Hora');
const Minuto = document.getElementById('Minuto');
const Segundo = document.getElementById('Segundo');

const relogio = {
  dataAtual: new Date(),                  // pegando o tempo atual
  dataFutura: new Date('11, 12, 2023'),   // pegando o tempo de uma data futura

  secunds: 1000,                          // segundo em milisegundos
  minute: 1000 * 60,                      // minuto em milisecundos
  hour: (1000 * 60) * 60,                 // hora em milisegundos
  day: ((1000 * 60) * 60) * 24,           // day em milisegundos
  year: (((1000 * 60) * 60) * 24) * 365,  // ano em milisegundos

  iniciar() {
    const SegundosTotais = () => {
      return Math.round(diferençaDeTempo() / relogio.secunds); // calcula quando segundos faltam para a data futura
    };
    
    const tempoEmSegundo = () => {
      return SegundosTotais() % 60;
    }; 
    
    const diferençaDeTempo = () => {
      return relogio.dataFutura.getTime() - relogio.dataAtual.getTime();
    }; 

    Segundo.innerHTML = tempoEmSegundo();
  },
  

  test() {
    console.log(relogio.SegundosTotais())
    setInterval(() => {
      
      console.log(relogio.tempoEmSegundo())
    }, 1000);
  },
};

export { relogio };