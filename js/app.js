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
  // TODO validar escolher e exibir
}

function reiniciar(evento) {
  // TODO impedir a navegação e restaurar o estado
}