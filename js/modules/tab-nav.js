export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
  }

  activeTab(index) {
    this.tabContent.forEach((content) => {
      content.classList.remove(content.dataset.anime);
    });
    this.tabContent[index].classList.add(this.tabContent[index].dataset.anime);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // se o length for 0, sera false, então não ira executar o código!
      // 0 sempre sera false, qualquer numero diferente dele é true
      this.activeTab(0) // ativa o primeiro item da lista
      this.addTabNavEvent()
    }
  }
}