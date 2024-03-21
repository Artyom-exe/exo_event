import '../style.css';
import { renderNav } from "../components/nav.js";

const app = document.querySelector("#app");

app.innerHTML = `
${renderNav()}

<h1> Like / Dislike </h1>
<button type="button" id="btn-like">
  <i class="em em---1" aria-role="presentation" aria-label="THUMBS UP SIGN"></i>
</button>
`;

const btn = document.querySelector('#btn-like');

const handler = () => {
  
    const rotation = btn.style.transform;

    if ((!rotation ) || rotation == 'rotate(0deg)') {
      btn.style.transform = 'rotate(180deg)';
    }
    else {
      btn.style.transform = 'rotate(0deg)';
    }
    console.log(rotation);
}

  btn.addEventListener("click", handler);





