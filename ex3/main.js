import '../style.css';
import { renderNav } from "../components/nav.js";

const app = document.querySelector("#app");
let compteur = 0;

app.innerHTML = `
${renderNav()}

<h1> Compteur de clique </h1>
<button type="button" id="btn-compteur">
  ${compteur}
</button>
`;

const btn = document.querySelector('#btn-compteur')
const handler = () => {

  if (btn) {
    compteur++;
    btn.innerHTML = `${compteur}`;
  }
}

btn.addEventListener('click', handler);







