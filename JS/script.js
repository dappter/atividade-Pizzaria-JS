
function fazerPedido() {
  const selecionado = document.querySelector("input[name='tamanho']:checked");
  console.log('Tamanho:' + selecionado.value);

  const selecionados = document.querySelectorAll("input[name='adicionais']:checked");
  console.log('Quantidade: ' + selecionados.length);

  const valorTotal = document.querySelector("#total h2 strong");
  console.log('Valor total: ' + valorTotal.textContent);
  valorTotal.textContent = 0;
  console.log('Valor total alterado: ' + valorTotal.textContent);

  const campoNome = document.querySelector(".input-text input");
  if (campoNome) {
      if (campoNome.value === "") {
          alert("Por favor, insira seu nome.");
          return;
      }
  }
} 

function atualizarPreco() {
  const adicionaisSelecionados = document.querySelectorAll("input[name='adicionais']:checked");
  const quantidadeAdicionais = adicionaisSelecionados.length;
  const precoAdicional = 5;
  const precoAdicionais = quantidadeAdicionais * precoAdicional;

  const valorTotalElemento = document.querySelector("#total h2 strong");
  let valorTamanho = null;

  const tamanhoSelecionado = document.querySelector("input[name='tamanho']:checked");
  if (tamanhoSelecionado) {
      if (tamanhoSelecionado.value === 'Pequena') valorTamanho = 25;
      else if (tamanhoSelecionado.value === 'Média') valorTamanho = 35;
      else if (tamanhoSelecionado.value === 'Grande') valorTamanho = 50;
  }

  const valorTotal = valorTamanho + precoAdicionais;
  valorTotalElemento.textContent = valorTotal.toFixed(0);
}




