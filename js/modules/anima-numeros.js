export default class AnimaNumeros {
  constructor(numeros, observeTarget, observeClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observeClass = observeClass
    this.observerTarget = document.querySelector(observeTarget); // elemento que vou usar para ser observado
    this.handleMutation = this.handleMutation.bind(this);
  }

  // função que não precisa do objeto para funcionar
  // pode ser declarada com (static nomeFunction)
  // a função ira fazer parte da classe AnimaNumeros e não do objeto criado a partir da classe
  static incrementaNumero(numero) {
    const total = +numero.innerText;
    const incremento = total / 100;
  
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start.toFixed();
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementaNumero(numero)); // usar constructor para chamar uma função static
  }
  
  // função que ocorre quando a mutação ocorre
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observeClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
  
  // adiciona o MutationObserver para verificar 
  // quando a classe ativo é adicionada ao element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation); // objeto que contem o observador
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver()
    }
    return this;
  }

}
