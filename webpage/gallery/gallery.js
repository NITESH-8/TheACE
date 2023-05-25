let hamburger = document.querySelector(".hamburger-menu");
hamburger.addEventListener("click", () => {
  document.querySelector(".nav-buttons ").classList.toggle("active");
});

let sliderRadioInputs = document.getElementsByName("slide_switch");

function checkOneByOne() {
  let t = 0;
  sliderRadioInputs.forEach((input) => {
    console.log(7);
    setTimeout(() => {
      console.log(input);
      input.checked = true;
    }, t);
    t += 2700;
  });
}

function next() {
  let curr = document.querySelector(
    '.slider input[name="slide_switch"]:checked'
  );
}

checkOneByOne();
setInterval(() => {
  checkOneByOne();
}, sliderRadioInputs.length * 2700);
