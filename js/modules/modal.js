export default class Modal {
  constructor(abrir, fechar, modal) {
    this.botaoAbrir = document.querySelector(abrir);
    this.botaoFechar = document.querySelector(fechar);
    this.modal = document.querySelector(modal);
    this.toggleLogin = this.toggleLogin.bind(this)
    this.clickOutsideModal = this.clickOutsideModal.bind(this)
  }

  toggleLogin(event) {
    event.preventDefault();
    this.modal.classList.toggle("ativo");
  }

  clickOutsideModal(event) {
    if (event.target === this.modal) {
      this.toggleLogin(event);
    }
  }

  addModalEvent() {
    this.botaoAbrir.addEventListener("click", this.toggleLogin);
    // com toggleLogin.bind(this) - a função sempre ira fazer referencia ao objeto Modal, sem o bind, a função ira referenciar o this.botaoAbrir, que é um elemento HTML, e o código não funcionara
    this.botaoFechar.addEventListener("click", this.toggleLogin);
    this.modal.addEventListener("click", this.clickOutsideModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.modal) {
      this.addModalEvent();
    }
    return this;
  }
}
