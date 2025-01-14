// importação da funcao no arquivo scroll-suave.js
import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
// import initAnimaNumeros from "./modules/anima-numeros.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch.bitcoin.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";

// o ideal é exportar somente uma coisa, para que o modulo seja especifico em fazer somente uma coisa
// as funções dos arquivos são carregadas em forma assincrona, porém são executadas na ordem que foi colocada

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init()

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init()

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
// initAnimaNumeros();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();