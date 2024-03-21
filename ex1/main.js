import '../style.css';
import { renderNav } from "../components/nav.js";

const app = document.querySelector("#app");
let color = "blue"; 

app.innerHTML = `
${renderNav()}

<h1> Changement couleur de fond </h1>
<button type="button" id="change-color-btn">
  ${color === "blue" ? "Bleu" : "Rouge"}
</button>
`;

const colorBtn = document.querySelector("#change-color-btn")

const handler = () => {
    if (color === "blue") {
        color = "red";
        colorBtn.innerHTML = "Rouge"
    }
    else {
      color = "blue";
      colorBtn.innerHTML = "Bleu"
    }

    document.body.style.backgroundColor = color;

  };

  colorBtn.addEventListener("click", handler);





