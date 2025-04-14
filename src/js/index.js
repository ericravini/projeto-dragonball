/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remove a seleção dele 

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
*/

/* OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado */

// passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
const botoes = document.querySelectorAll(".botao"); // Busca todos os seletores que tem a classe "botao" (pois .botao é uma classe, se fosse #botao seria um ID). Retorna um array com os resultados
const personagens = document.querySelectorAll(".personagem")

//passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
botoes.forEach((botao, indice) => { // o segundo argumento é a posição do botao no array, quando há 2 argumentos precisa colocar eles entre parenteses,

  // para cada item na lista de "botoes", vai dar um console.log no item
  botao.addEventListener("click", () => {
    // passo 3 - verificar se já existe um botão selecionado, se sim, devemos remove a seleção dele
    const botaoSelecionado = document.querySelector(".botao.selecionado"); // junto pra dizer que precisa ter as duas classes ao mesmo tempo (botao e selecionado)
    botaoSelecionado.classList.remove("selecionado");

    botao.classList.add("selecionado");

    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
    
    personagens[indice].classList.add("selecionado")
  });

});

// OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem

//passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele

//passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
