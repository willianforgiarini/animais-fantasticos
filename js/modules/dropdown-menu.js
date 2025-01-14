import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((menu) => {
    // usando um array com mais de um tipo de evento, e passando eles no addEventListener;
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    // this é o objeto que chamou a função, no caso o menu
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      // passando uma função como parametro para ser um callback
      this.classList.remove("active");
    });
  }
}
