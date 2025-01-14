export default function initAnimaNumeros() {}

function animaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");

  numeros.forEach((numero) => {
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
  });
}

function handleMutation(mutation) {
  if (mutation[0].target.classList.contains("ativo")) {
    observer.disconnect();
    animaNumeros();
  }
}

const observerTarget = document.querySelector(".numeros"); // elemento que vou usar para ser observado
const observer = new MutationObserver(handleMutation); // objeto que contem o observador

observer.observe(observerTarget, { attributes: true });
