export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    // se o length for 0, sera false, então não ira executar o código!
    // 0 sempre sera false, qualquer numero diferente dele é true
    tabContent[0].classList.add(tabContent[0].dataset.anime);

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove(content.dataset.anime);
      });
      tabContent[index].classList.add(tabContent[index].dataset.anime);
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => activeTab(index));
    });
  }
}
// isolando a função, e chamando ela logo após, assim evita dar erro se for declaro uma variavel com o mesmo tipo ou coisa parecida
