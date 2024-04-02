import '/laragon/www/exo_event/style.css';
import { renderNav } from "../components/nav.js";

app.innerHTML = `
${renderNav()}

<h1>Menu dropdown</h1>
<input type="button" id= "btn-drop" value="Click me">
<ul id="hideIt">
  <li><a href="">link 1</a></li>
  <li><a href="">link 2</a></li>
  <li><a href="">link 3</a></li>
</ul>
`;

const element = document.querySelector('#hideIt');
const btnDrop = document.querySelector('#btn-drop');

const handler = () => {
  
  element.classList.toggle("hiddenEx6");
  
}

btnDrop.addEventListener('click', handler);







