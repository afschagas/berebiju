function slider(anything) {
  document.querySelector(".one").src = anything;
}

// Gera Número de Pedido aleatório
function obterNumeroAleatorio(n1, n2) {
  const min = Math.ceil(n1);
  const max = Math.floor(n2);
  return Math.floor(Math.random() * (max - min)) + min;
}

function modificarNumeroParaSerMultiploDeCinco(n) {
  const numeroDivisivelPorCinco = Math.round(n / 5) * 5;
  return numeroDivisivelPorCinco;
}

const numeroAleatorio = obterNumeroAleatorio(5, 555);
const numeroFinal = modificarNumeroParaSerMultiploDeCinco(numeroAleatorio);

// Card 01
function chamaWhatsAppUm(url, nomeProduto, descProduto, priceProduto) {
  nomeProduto = document.getElementById("nomeProdutoUm").textContent;
  descProduto = document.getElementById("descProdutoUm").textContent;
  priceProduto = document.getElementById("priceProdutoUm").textContent;

  url = location.href =
    "https://api.whatsapp.com/send?phone=5511941281552&text=" +
    `Olá! Seu pedido foi gerado!` +
    ` ` +
    `Nº Pedido : ${numeroAleatorio} ` +
    `Produto: ${nomeProduto}` +
    ` - ` +
    `Descrição: ${descProduto}` +
    ` - ` +
    `Preço: ${priceProduto} ` +
    ` ` +
    `Obrigado!`;
}

// Card 02
function chamaWhatsAppDois(url, nomeProduto, descProduto, priceProduto) {
  nomeProduto = document.getElementById("nomeProdutoDois").textContent;
  descProduto = document.getElementById("descProdutoDois").textContent;
  priceProduto = document.getElementById("priceProdutoDois").textContent;

  url = location.href =
    "https://api.whatsapp.com/send?phone=5511941281552&text=" +
    `Olá! Seu pedido foi gerado!` +
    ` ` +
    `Nº Pedido : ${numeroAleatorio} ` +
    `Produto: ${nomeProduto}` +
    ` - ` +
    `Descrição: ${descProduto}` +
    ` - ` +
    `Preço: ${priceProduto} ` +
    ` ` +
    `Obrigado!`;
}

// Card 03
function chamaWhatsAppTres(url, nomeProduto, descProduto, priceProduto) {
  nomeProduto = document.getElementById("nomeProdutoTres").textContent;
  descProduto = document.getElementById("descProdutoTres").textContent;
  priceProduto = document.getElementById("priceProdutoTres").textContent;

  url = location.href =
    "https://api.whatsapp.com/send?phone=5511941281552&text=" +
    `Olá! Seu pedido foi gerado!` +
    ` ` +
    `Nº Pedido : ${numeroAleatorio} ` +
    `Produto: ${nomeProduto}` +
    ` - ` +
    `Descrição: ${descProduto}` +
    ` - ` +
    `Preço: ${priceProduto} ` +
    ` ` +
    `Obrigado!`;
}

// Card 04
function chamaWhatsAppQuatro(url, nomeProduto, descProduto, priceProduto) {
  nomeProduto = document.getElementById("nomeProdutoQuatro").textContent;
  descProduto = document.getElementById("descProdutoQuatro").textContent;
  priceProduto = document.getElementById("priceProdutoQuatro").textContent;

  url = location.href =
    "https://api.whatsapp.com/send?phone=5511941281552&text=" +
    `Olá! Seu pedido foi gerado!` +
    ` ` +
    `Nº Pedido : ${numeroAleatorio} ` +
    `Produto: ${nomeProduto}` +
    ` - ` +
    `Descrição: ${descProduto}` +
    ` - ` +
    `Preço: ${priceProduto} ` +
    ` ` +
    `Obrigado!`;
}

// Card 05
function chamaWhatsAppCinco(url, nomeProduto, descProduto, priceProduto) {
  nomeProduto = document.getElementById("nomeProdutoCinco").textContent;
  descProduto = document.getElementById("descProdutoCinco").textContent;
  priceProduto = document.getElementById("priceProdutoCinco").textContent;

  url = location.href =
    "https://api.whatsapp.com/send?phone=5511941281552&text=" +
    `Olá! Seu pedido foi gerado!` +
    ` ` +
    `Nº Pedido : ${numeroAleatorio} ` +
    `Produto: ${nomeProduto}` +
    ` - ` +
    `Descrição: ${descProduto}` +
    ` - ` +
    `Preço: ${priceProduto} ` +
    ` ` +
    `Obrigado!`;
}

// Card 06
function chamaWhatsAppSeis(url, nomeProduto, descProduto, priceProduto) {
  nomeProduto = document.getElementById("nomeProdutoSeis").textContent;
  descProduto = document.getElementById("descProdutoSeis").textContent;
  priceProduto = document.getElementById("priceProdutoSeis").textContent;

  url = location.href =
    "https://api.whatsapp.com/send?phone=5511941281552&text=" +
    `Olá! Seu pedido foi gerado!` +
    ` ` +
    `Nº Pedido : ${numeroAleatorio} ` +
    `Produto: ${nomeProduto}` +
    ` - ` +
    `Descrição: ${descProduto}` +
    ` - ` +
    `Preço: ${priceProduto} ` +
    ` ` +
    `Obrigado!`;
}

// Card 07
function chamaWhatsAppSete(url, nomeProduto, descProduto, priceProduto) {
  nomeProduto = document.getElementById("nomeProdutoSete").textContent;
  descProduto = document.getElementById("descProdutoSete").textContent;
  priceProduto = document.getElementById("priceProdutoSete").textContent;

  url = location.href =
    "https://api.whatsapp.com/send?phone=5511941281552&text=" +
    `Olá! Seu pedido foi gerado!` +
    ` ` +
    `Nº Pedido : ${numeroAleatorio} ` +
    `Produto: ${nomeProduto}` +
    ` - ` +
    `Descrição: ${descProduto}` +
    ` - ` +
    `Preço: ${priceProduto} ` +
    ` ` +
    `Obrigado!`;
}

// Card 08
function chamaWhatsAppOito(url, nomeProduto, descProduto, priceProduto) {
  nomeProduto = document.getElementById("nomeProdutoOito").textContent;
  descProduto = document.getElementById("descProdutoOito").textContent;
  priceProduto = document.getElementById("priceProdutoOito").textContent;

  url = location.href =
    "https://api.whatsapp.com/send?phone=5511941281552&text=" +
    `Olá! Seu pedido foi gerado!` +
    ` ` +
    `Nº Pedido : ${numeroAleatorio} ` +
    `Produto: ${nomeProduto}` +
    ` - ` +
    `Descrição: ${descProduto}` +
    ` - ` +
    `Preço: ${priceProduto} ` +
    ` ` +
    `Obrigado!`;
}
