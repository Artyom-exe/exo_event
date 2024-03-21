import '/style.css'
import { renderNav } from "/components/nav.js"

const app = document.querySelector("#app");

app.innerHTML = `
${renderNav()}
`;