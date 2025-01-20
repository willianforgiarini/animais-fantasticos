export default class Funcionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
  }
  
  dadosFuncionamento() {
    this.horarioSemana = this.funcionamento.dataset.horario.split(",").map(Number);
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number); // map(Number) ja retorna os itens da Array convertido para numeros
    // map para interagir com cada item da Array criada no split e retorna uma nova Array
  }
  
  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }
  
  estaAberto() {
    const semanaAberto = this.diasSemana.includes(this.diaAgora);
    const horarioAberto = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];
    
    return semanaAberto && horarioAberto
  }
  
  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add("aberto");
    }
  }
  
  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}

// console.log(diasSemana.find(dia => dia === diaAgora)); // me retorna o elemento que for igual ao que foi passado;
// console.log(diasSemana.indexOf(diaAgora)); // me retorna o index do elemento que for igual ao q foi passado
// console.log(diasSemana.includes(diaAgora)); // retorna true ou false veriricando se o elemento está presente no array

// ------------------------------------
// const agora = new Date() // sem definir parametros em Date(), ele ira busca pela data do momento atual
// const natal = new Date('Dec 25 2024') // posso definir também um data especifica - se algum parametro não for definido, como a hora, se preenchido com 00:00

// console.log(agora); // retorna data, dia da semana, mes, horario GMT e padrão do horario
// console.log(agora.getDate()); // retorna numero do dia;
// console.log(agora.getDay()); // retorna dia da semana em numeros, começando o domingo pelo 0
// console.log(agora.getMonth()); // retorna o mes, começando janeiro como 0

// console.log(natal);

// function transformarDias(tempo) {
//     return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(natal.getTime());

// console.log(Math.floor(diasFuturo - diasAgora));
