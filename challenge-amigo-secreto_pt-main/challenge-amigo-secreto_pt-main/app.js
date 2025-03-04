let amigos = [];

function adicionarAmigo() {
  let amigoEscolhido = document.querySelector("input").value;
  if (amigoEscolhido == "") {
    alert("Por favor, insira um valor válido.");
  } else {
    amigos.push(amigoEscolhido);
    limparCampo();
    mostrarAmigosNaLista();
  }
}

function limparCampo() {
  amigoEscolhido = document.querySelector("input");
  amigoEscolhido.value = "";
}

function mostrarAmigosNaLista() {
  paragrafoAmigos = document.getElementById("listaAmigos");
  paragrafoAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    paragrafoAmigos.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length == 0) {
    alert("Não há amigos suficientes para a realização do sorteio");
  } else {
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;
  }
}
