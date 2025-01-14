export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if(options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this); // bind - define na função que o this sera o objeto da classe
  }
  
  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href"); // retornando #animais - usa no querySelector para buscar como id
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //     top: topo,
    //     behavior: 'smooth'
    // });
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
