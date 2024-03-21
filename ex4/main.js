import '../style.css';
import { renderNav } from "../components/nav.js";

const app = document.querySelector("#app");

app.innerHTML = `
${renderNav()}

<h1>Changement de couleur de fond avec un sélecteur de couleur</h1>
<input type="color" id= "btn-color"> 
<button type="button" id="btn-change">Confirm</button> 
`;
const btnColor = document.querySelector('#btn-color')
const btnChange = document.querySelector('#btn-change')

const handler = () => {
  const color = btnColor.value;
  if (color) {
    app.style.background = color
  }
}

btnChange.addEventListener('click', handler);







