import '../style.css';
import { renderNav } from "../components/nav.js";

app.innerHTML = `
${renderNav()}

<h1>Changement de couleur de fond avec un sélecteur de couleur</h1>
<input type="color" id= "btn-color"> 
`;
const btnColor = document.querySelector('#btn-color')

const handler = () => {
  
  document.body.style.background = btnColor.value;
}

btnColor.addEventListener('input', handler);







