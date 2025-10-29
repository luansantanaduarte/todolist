const botaoDarkMode = document.querySelector(".btn-dark-mode");
const botaoLightMode = document.querySelector(".btn-light-mode");
const cabecalho = document.querySelector(".cabecalho");
const principal = document.querySelector(".principal");
const task = document.querySelector(".task-titulo");
const btnAdd = document.getElementById("btn-add");
const rodape = document.querySelector(".rodape");
const divisoria = document.querySelector(".task-divisoria");
const detalhes = document.querySelector(".task-detalhes");
const taskPrompt = document.querySelector(".task-prompt");

function TrocarDarkMode() {
    botaoDarkMode.style.display = "none";
    botaoLightMode.style.display = "block";
    cabecalho.classList.add("cabecalho-dark-mode");
    principal.classList.add("principal-dark-mode");
    task.classList.add("task-titulo-dark-mode");
    btnAdd.classList.add("btn-add-dark-mode");
    rodape.classList.add("rodape-dark-mode");
    divisoria.classList.add("task-divisoria-dark-mode");
    detalhes.classList.add("task-detalhes-dark-mode");
    taskPrompt.classList.add("task-prompt-dark-mode");
}

function TrocarLightMode() {
    botaoLightMode.style.display = "none";
    botaoDarkMode.style.display = "block";
    cabecalho.classList.remove("cabecalho-dark-mode");
    principal.classList.remove("principal-dark-mode");
    task.classList.remove("task-titulo-dark-mode");
    btnAdd.classList.remove("btn-add-dark-mode");
    rodape.classList.remove("rodape-dark-mode");
    divisoria.classList.remove("task-divisoria-dark-mode");
    detalhes.classList.remove("task-detalhes-dark-mode");
    taskPrompt.classList.remove("task-prompt-dark-mode");
}

function escreverTask() {
    const titulo = document.querySelector(".task-titulo");
    titulo.textContent = "";
    titulo.style.opacity = "100%";
    const taskDetalhes = document.querySelector(".task-detalhes");
    const taskDivisoria = document.querySelector(".task-divisoria");
    taskDetalhes.style.display = "block";
    taskDivisoria.style.display = "block";
}