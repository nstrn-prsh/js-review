import generateElement from "./generateElement";

const container = generateElement("div", { class: "container" });

function generator(nameTx, ageTx) {
     const cart = generateElement(
          "div",
          { class: "cart" },
          generateElement("span", null, `name: ${nameTx}`),
          generateElement("span", null, `age: ${ageTx}`)
     );

     return cart;
}

const userData = [
     { name: "nas", age: "20" },
     { name: "taran", age: "21" },
     { name: "nastaran", age: "22" },
];

userData.forEach((data) =>
     container.appendChild(generator(data.name, data.age))
);

export default container;
