function TrocarDarkMode() {
    const botaoDarkMode = document.querySelector(".btn-dark-mode");
    botaoDarkMode.style.display = "none";
    const botaoLightMode = document.querySelector(".btn-light-mode");
    botaoLightMode.style.display = "block";

    const cabecalho = document.querySelector(".cabecalho");
    cabecalho.classList.add("cabecalho-dark-mode");

    const principal = document.querySelector(".principal");
    principal.classList.add("principal-dark-mode");

    const task = document.querySelector(".task-titulo");
    task.classList.add("task-titulo-dark-mode");
    
    const btnAdd = document.getElementById("btn-add");
    btnAdd.classList.add("btn-add-dark-mode");

    const rodape = document.querySelector(".rodape");
    rodape.classList.add("rodape-dark-mode");
}

function TrocarLightMode() {
    const botaoLightMode = document.querySelector(".btn-light-mode");
    botaoLightMode.style.display = "none";
    const botaoDarkMode = document.querySelector(".btn-dark-mode");
    botaoDarkMode.style.display = "block";

    const cabecalho = document.querySelector(".cabecalho");
    cabecalho.classList.remove("cabecalho-dark-mode");

    const principal = document.querySelector(".principal");
    principal.classList.remove("principal-dark-mode");

    const task = document.querySelector(".task-titulo");
    task.classList.remove("task-titulo-dark-mode");

    const btnAdd = document.getElementById("btn-add");
    btnAdd.classList.remove("btn-add-dark-mode");

    const rodape = document.querySelector(".rodape");
    rodape.classList.remove("rodape-dark-mode");
}

function escreverTask() {
    const titulo = document.querySelector(".task-titulo");
    titulo.textContent = ""
}