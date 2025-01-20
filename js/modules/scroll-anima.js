import debounce from "./debounce.js";

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    
    this.checkDistance = this.checkDistance.bind(this);
  }

  // pega a distância de cada item em relação
  // ao topo do site
  getDistance() {
    this.distance = [...this.sections].map(section => { // NodeList não possui o método .map, [...] transforma em Array
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset) - this.windowMetade,
      };
    });
  }

  // vetifica a distância em cada objeto
  // em relação ao scroll do site
  checkDistance() {
    this.distance.forEach(section => {
      if (window.scrollY > section.offset) {
        section.element.classList.add('ativo');
      } else if (section.element.classList.contains('ativo')) {
        section.element.classList.remove('ativo')
      }
    })
  }
    
  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance(); // para abrir o site e ja carregar uma section
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  // remove o evento de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance)
  }
}
