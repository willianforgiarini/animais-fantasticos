import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    // define um padrão com um operador ternário os eventos forem undefined
    this.eventos = (events === undefined) ? ["click", "touchstart"] : events;
    this.activeClass = 'active';

    this.openMenu = this.openMenu.bind(this);

    // this.init() // - tudo que é colocado no constructor é iniciado automaticamente, assim não precisa ativar o this.init() qnd exporta a classe
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this. menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }
  
  addMenuMobileEvent() {
    this.eventos.forEach(userEvent => this.menuButton.addEventListener(userEvent, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvent();
    }
    return this
  }
}
