// 1 movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - selecionando por tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - selecionando por id
const title = document.getElementById("title");

console.log(title);

// 4 - selecionando por class
const produto = document.getElementsByClassName("product");

console.log(produto);

// 5 - selecionando os elementos por css
const productQuery = document.querySelectorAll(".product");

console.log(productQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - insertBefore
const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// p.innerHTML = "teste";

// 7 - appendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

li.textContent = "Novo li";

navLinks.appendChild(li);

// 8 - replaceChild
const h2 = document.createElement("h2");

h2.textContent = "Meu novo titulo!";

header.replaceChild(h2, title);

// 9 - createTextNode
const myText = document.createTextNode("Agora vamos colocar mais um titulo");

const h3 = document.createElement("h3");;

h3.appendChild(myText);

mainContainer.appendChild(h3);

// 10 - trabalhando com atributos
const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");

// 11 - altura e largura
const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// 12 - posicao do elemento
const produto1 = produto[0];

console.log(produto1.getBoundingClientRect());

// 13 - css com js

mainContainer.style.color = "red";

mainContainer.style.backgroundColor = "black";

mainContainer.style.borderRadius = "20px";

mainContainer.style.paddingBottom = "10px";

// 14 - alterando estilos de varios elementos
for(const li of listItens) {
    li.style.backgroundColor = "red";
}


