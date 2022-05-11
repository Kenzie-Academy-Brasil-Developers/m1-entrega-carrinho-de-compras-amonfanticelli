const body = document.querySelector("body");
const main = document.createElement("main");
main.classList.add("product");
const productsList = document.createElement("ul");
const div = document.createElement("div");
const p2 = document.createElement("p");

body.prepend(main);
main.appendChild(productsList);
main.appendChild(div);
div.appendChild(p2);

const productsCart = [
  {
    id: 1,
    name: "mamão",
    price: 1.0,
  },
  {
    id: 2,
    name: "maçã",
    price: 2.0,
  },
  {
    id: 3,
    name: "uva",
    price: 3.0,
  },
  {
    id: 4,
    name: "Água tônica",
    price: 5.0,
  },
];

function produtos() {
  for (let i = 0; i < productsCart.length; i++) {
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.innerText = productsCart[i].name;
    p.innerText = productsCart[i].price;
    li.appendChild(h2);
    li.appendChild(p);
    productsList.appendChild(li);
  }
}
produtos();

let resultadoSoma = productsCart.reduce(
  (acc, current) => acc + current.price,
  0
);

p2.innerText = `total = ${resultadoSoma}`;
console.log(p2);
