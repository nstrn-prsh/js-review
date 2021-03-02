function generateElement(tagName, attribute) {
     const element = document.createElement(tagName);

     if (attribute) {
          Object.keys(attribute).forEach((key) =>
               element.setAttribute(key, attribute[key])
          );
     }

     return element;
}

const container = generateElement("div", { class: "container" });

function generator(nameTx, ageTx) {
     const cart = document.createElement("div");
     cart.classList.add("cart");

     const name = document.createElement("span");
     name.innerText = `name: ${nameTx}`;

     const age = document.createElement("span");
     age.innerText = `age: ${ageTx}`;

     cart.appendChild(name);
     cart.appendChild(age);

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

document.body.appendChild(container);
