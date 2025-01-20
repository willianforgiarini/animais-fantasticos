// importação da funcao no arquivo scroll-suave.js
import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import FetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch.bitcoin.js";
import ScrollAnima from "./modules/scroll-anima.js";

// o ideal é exportar somente uma coisa, para que o modulo seja especifico em fazer somente uma coisa
// as funções dos arquivos são carregadas em forma assincrona, porém são executadas na ordem que foi colocada

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init()

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init()

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const toolTip = new Tooltip('[data-tooltip]');
toolTip.init();

const scollAnima = new ScrollAnima('[data-anime="scroll"]');
scollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]', ['touchstart', 'click']);
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]');
funcionamento.init();

FetchAnimais('./animaisapi.json', '.numeros-grid');
fetchBitcoin('https://www.blockchain.com/pt/ticker', '.btc-preco');