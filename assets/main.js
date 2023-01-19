// Variável que pega o botão do menu hamburguer
const menu = document.getElementById("menu");

// Aqui é aplicado o Evento de click para quando clicar no botão, executar a função que mostra o menu.
menu.addEventListener("click", () => {

    // Aqui vai fazer com que o display fique block e mude o icone de "Hamburuger" para "X"
    document.getElementById("menu__hamburguer").classList.toggle("change");

    // Aqui vai tornar o display da lista block, já que o display inicialmente é none.
    document.getElementById("nav__lista").classList.toggle("change");

    // Aqui é aplicado o formato que o fundo rosa irá ter.
    document.getElementById("menu__bg").classList.toggle("change-bg");
})

