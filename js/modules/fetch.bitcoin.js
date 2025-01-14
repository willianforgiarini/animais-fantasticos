export default function initFetchBitcoin() {
  fetch('https://www.blockchain.com/pt/ticker')
  .then(response => response.json())
  .then(json => {
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);
  }).catch(erro => {
    console.log(Error(erro));
  });
}


// somente usando fetch e then, se tiver código abaixo, e o fetch não for concluído, o código abaixo não irá esperar o fetch ser concluído e sera executado, ja com o await na URL, ele espera ser concluído pra executar o restante do código