const nav = document.querySelector('.nav');
const ham = document.querySelector('.ham-wrap');

document.querySelector('#accordion').addEventListener("click", () => {
  nav.classList.toggle("open");
  ham.classList.toggle('open-ham');
})

