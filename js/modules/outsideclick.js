export default function outsideClick(element, events, callback) {
  const html = document.documentElement; // retorna o html enteiro da pagina
  const outside = "data-outside";

  // verifica se o elemento tem o atributo outside, se não tiver, vai adicionar o evento e criar o atributo, assim, o evento é criado apenas uma vez
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAttribute(outside, "");
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
    // console.log(element.contains(event.target)); // verifica se o element contem o elemento que está sendo clicando. element é uma UL, event.target elemento que está sendo clicado
    // console.log(event.target); // event.target retorna o elemento html que está sendo clicado
  }
}
