export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number); // map(Number) ja retorno os itens da Array convertido para numeros
  // map para interagir com cada item da Array criada no split e retorna uma nova Array

  const diasSemana2 = funcionamento.dataset.semana
    .split(",")
    .map((num) => +num); // dentro do elemento, a uma propriedade dataset, que possui propriedades com a chave do dataset e o seu valor

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.includes(diaAgora);
  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}

// console.log(diasSemana.find(dia => dia === diaAgora)); // me retorno o elemento que for igual ao que foi passado;
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
