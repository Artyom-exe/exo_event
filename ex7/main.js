import '/laragon/www/exo_event/style.css';
import { renderNav } from "../components/nav.js";

app.innerHTML = `
${renderNav()}

<h1>Tabs</h1>
<input type="button" id ="btn1" value="Paris">
<input type="button" id ="btn2" value="London">
<input type="button" id ="btn3" value="Tokyo">
<article id ="ex7">
  <p id="p1" class="hiddenEx7">Paris is the capital of France</a></p>
  <p id="p2" class="hiddenEx7">London is the capital of England</p>
  <p id="p3" class="hiddenEx7">Tokyo is the capital of Japan</p>
</article>
`;

// const element1 = document.querySelector('#p1');
// const element2 = document.querySelector('#p2');
// const element3 = document.querySelector('#p3');

// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');

// const handler = (event) => {
//   const clickedBtn = event.target;

//   if (clickedBtn === btn1) {
//     element1.classList.remove("hiddenEx7");
//     element2.classList.add("hiddenEx7");
//     element3.classList.add("hiddenEx7");
//   } else if (clickedBtn === btn2) {
//     element1.classList.add("hiddenEx7");
//     element2.classList.remove("hiddenEx7");
//     element3.classList.add("hiddenEx7");
//   } else if (clickedBtn === btn3) {
//     element1.classList.add("hiddenEx7");
//     element2.classList.add("hiddenEx7");
//     element3.classList.remove("hiddenEx7");
//   }
// };

// btn1.addEventListener('click', handler);
// btn2.addEventListener('click', handler);
// btn3.addEventListener('click', handler);




// -------------- + opti -------------------

const elements = document.querySelectorAll('.hiddenEx7');
const buttons = document.querySelectorAll('input[type="button"]');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    elements.forEach((element, idx) => {
      if (idx === index) {
        element.classList.remove('hiddenEx7');
      } else {
        element.classList.add('hiddenEx7');
      }
    });
  });
});