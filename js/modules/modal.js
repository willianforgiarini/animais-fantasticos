export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const modal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && modal) {
    function toggleLogin(event) {
      event.preventDefault();
      modal.classList.toggle("ativo");
    }

    function clickOutsideModal(event) {
      if (event.target === this) {
        toggleLogin(event);
      }
    }

    botaoAbrir.addEventListener("click", toggleLogin);
    botaoFechar.addEventListener("click", toggleLogin);
    modal.addEventListener("click", clickOutsideModal);
  }
}
