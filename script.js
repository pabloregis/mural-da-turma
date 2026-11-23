const botao = document.querySelector("#sortear");
const resultado = document.querySelector("#sorteado");

botao.addEventListener("click", () => {
  const nomes = [...document.querySelectorAll(".cartoes li:not(.vazia) strong")];
  if (nomes.length === 0) {
    resultado.textContent = "Ainda não há cartões no mural.";
    return;
  }
  const escolhido = nomes[Math.floor(Math.random() * nomes.length)];
  resultado.textContent = `Sorteado: ${escolhido.textContent}`;
});
