/* -------------------------- CARD RANDOM IN ABOUT -------------------------- */
let indexes = [0, 1, 2, 3];
indexes = indexes.sort(() => Math.random() - 0.5); //random the array

// TOP SMALL CARDS
let cardNitesh = document.querySelector(".card-nitesh");
let cardShivang = document.querySelector(".card-shivang");
let cardShubham = document.querySelector(".card-shubham");
let cardKartick = document.querySelector(".card-kartick");
let cardAce = [cardNitesh, cardShivang, cardShubham, cardKartick];

for (let i = 0; i < 4; ++i) {
  let randomNumb = Math.floor((Date.now() * Math.random()) % 4);
  cardAce[i].style.order = randomNumb;
}

// BOTTOM BIG CARD
let memberNitesh = document.querySelector("#member-nitesh");
let memberShivang = document.querySelector("#member-shivang");
let memberShubham = document.querySelector("#member-shubham");
let memberKartick = document.querySelector("#member-kartick");
let memberAce = [memberNitesh, memberShivang, memberShubham, memberKartick];

for (let i = 0; i < 4; ++i) {
  let index = indexes[i];
  memberAce[i].style.order = index;

  if (screen.width > 1000) {
    //ZIG-ZAG MEMBER CARDS when screen width is bigger than 1000px
    if (index % 2 !== 0) {
      memberAce[i].querySelector(".member-pic").style.order = 1;
      memberAce[i].querySelector(".member-detail").style.order = 0;
    } else {
      memberAce[i].querySelector(".member-pic").style.order = 0;
      memberAce[i].querySelector(".member-detail").style.order = 1;
    }
  }
}

/* ----------------------------- HAMBURGER MENU ----------------------------- */
let hamburger = document.querySelector(".hamburger-menu");
hamburger.addEventListener("click", () => {
  document.querySelector(".nav-buttons ").classList.toggle("active");
});
