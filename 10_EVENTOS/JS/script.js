// 1 - adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function(){
    console.log("Clicou!");
    const h1 = document.querySelector("#teste");
    h1.style.color = "green";
})

// 2 - removendo evento
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirtBtn = document.querySelector("#other-btn");

thirtBtn.addEventListener("click", function(){
    console.log("Removeu o evento");
    secondBtn.removeEventListener("click", imprimirMensagem);
});