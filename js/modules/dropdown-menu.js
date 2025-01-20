import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    this.events = (events === undefined) ? ['touchstart', 'click'] : events;

    this.activeClass = 'active';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }
  
  // ativa o dropdownmenu e adiciona
  // a função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element  = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      // passando uma função como parametro para ser um callback
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenusEvents() {
    this.dropdownMenus.forEach((menu) => {
      // usando um array com mais de um tipo de evento, e passando eles no addEventListener;
      ["touchstart", "click"].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvents();
    }
    return this;
  }
}
