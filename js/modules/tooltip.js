export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }
  
  // move a tooltip com base em seus estilos
  // de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // remove a tooltip e os eventos de mousemove e mouse leave
  onMouseLeave({currentTarget}) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }    
  
  // cria a tooltip box e coloca no body
  createTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    // element é o this passado em onMouseOver
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox); // adiciona o elemento criado ao fim do body
    this.tooltipBox = tooltipBox;
  }

  // cria a tooltip e adiciona os eventos
  // de mousemove e mouseleave ao target
  onMouseOver({currentTarget}) { // desestruturando o objeto event para buscar somente a propriedade currentTarget
    this.createTooltipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.tooltips.forEach(item => {
      item.addEventListener('mouseover', this.onMouseOver)
    })
  }
  
  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
