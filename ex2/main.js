import '../style.css';
import { renderNav } from "../components/nav.js";

const app = document.querySelector("#app");

app.innerHTML = `
${renderNav()}

<h1> Like / Dislike </h1>
<button type="button" id="btn-like">
  <img src="/thumb-up-fill.svg">
</button>
`;

const Btn = document.querySelector("#btn-like")

const handler = () => {
    
  };

  colorBtn.addEventListener("click", handler);





