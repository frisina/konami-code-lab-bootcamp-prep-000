const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

const main = document.body;

function init() {
  document.addEventListener('keydown', onKeyDownHandler)
}

function onKeyDownHandler(e) {

  const key = e.key;

     if (key === code[index]) {
       index++;

        if (index === code.length) {
          alert("Konami kool!");

          index = 0;
        }
      } else {
        index = 0;
      }
    };
