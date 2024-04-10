//selecionando o form
const form = document.querySelector("#form");

//evento submit para o form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //selecionando os valores que o usuário digita no input
  const inputPeso = document.querySelector("#peso").value;
  const inputAltura = document.querySelector("#altura").value;

  // validação dos inputs de peso e altura 
  if (!inputPeso) {
    alert("Peso inválido.");
    return;
  }

  if (!inputAltura) {
    alert("Altura inválida.");
    return;
  }

  //calculando o imc
  const calculoImc = (inputPeso / (inputAltura * inputAltura)).toFixed(2);

  const valor = document.querySelector("#valor"); // seleciona o valor que aparece quando calcula o imc
  let descricao = ""; // seta a descrição vazia

  document.querySelector("#info").classList.remove("hidden"); //removendo a classe que oculta as infos de resultado do imc
  valor.classList.add("atencao"); // adiciona a classe atenção nas condições

  // condições do imc
  if (calculoImc < 18.5) {
    descricao = "Cuidado, você está abaixo do peso";
  } else if (calculoImc > 18.5 && calculoImc < 24.9) {
    descricao = "Peso normal";
    valor.classList.remove("atencao"); // remove classe de atenção
    valor.classList.add("normal"); // adiciona classe normal
  } else if (calculoImc > 25 && calculoImc < 29.9) {
    descricao = "Cuidado, está com sobrepeso";
  } else if (calculoImc > 30 && calculoImc < 34.9) {
    descricao = "Cuidado, obesidade I";
  } else if (calculoImc > 35 && calculoImc < 39.9) {
    descricao = "Cuidado, obesidade II";
  } else {
    descricao = "Cuidado, obesidade III";
  }

  valor.textContent = calculoImc.replace(".", ","); // conteudo do texto do valor recebe o calculo do imc, tirando o ponto, colocando a virgula
  document.querySelector("#descricao").textContent = descricao; // selecionando a div descrição e colocando o conteúdo do texto dela ser a descrição da condição
});
