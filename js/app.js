const amigos = [];

function adicionar() {
    const campo = document.getElementById("nome-amigo");
  const nome = campo.value.trim();

  if (nome === "") {
    alert("Digite um nome.");
    return;
  }

  amigos.push(nome);

  const lista = document.getElementById("lista-amigos");
  lista.textContent = amigos.join(", ");

  campo.value = "";
  campo.focus();
  // TODO ler validar guardar e atualizar
}

function sortear() {

     if (amigos.length < 2) {
        alert("É necessário ter pelo menos dois participantes.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const escolhido = amigos[indice];

    const resultado = document.getElementById("lista-sorteio");

    const item = document.createElement("li");
    item.textContent = escolhido;

    resultado.appendChild(item);
    
}

function reiniciar(evento) {
  
    if (evento) {
        evento.preventDefault();
    }

    amigos.length = 0;

    const campo = document.getElementById("nome-amigo");
    const lista = document.getElementById("lista-amigos");
    const resultado = document.getElementById("lista-sorteio");

    campo.value = "";
    lista.textContent = "";
    resultado.replaceChildren();

    campo.focus();
  // TODO impedir a navegação e restaurar o estado
}