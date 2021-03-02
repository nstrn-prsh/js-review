function generateElement(tagName, attribute, ...children) {
     const element = document.createElement(tagName);

     if (attribute) {
          Object.keys(attribute).forEach((key) =>
               element.setAttribute(key, attribute[key])
          );
     }

     if (children) {
          children.forEach((child) => {
               if ("string" === typeof child)
                    element.appendChild(document.createTextNode(child));
               else element.appendChild(child);
          });
     }

     return element;
}

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

document.body.appendChild(container);
