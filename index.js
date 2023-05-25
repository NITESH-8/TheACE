/* ----------------------- home page hover member text ---------------------- */
let ace4members = document.querySelectorAll(".img-responsive");
let memberList = [
  {
    initial: "SHUBHAM",
    mid: '"SHADOW"',
    last: "RAWAT",
  },
  {
    initial: "SHIVANG",
    mid: '"ECHO"',
    last: "SAKLANI",
  },
  {
    initial: "NITESH",
    mid: '"SHIELD"',
    last: "RAWAT",
  },
  {
    initial: "KARTICK",
    mid: '"KARMA"',
    last: "VERMA",
  },
];

function showMemberDetail(e) {
  let memberElement = e.target;
  let memberName = e.target.dataset.member;
  console.log(e.target.dataset.member);
  let order;

  if (memberName == "shadow") order = 0;
  else if (memberName == "echo") order = 1;
  else if (memberName == "shield") order = 2;
  else order = 3;

  document.querySelector(".initial").textContent = memberList[order].initial;
  document.querySelector(".mid").textContent = memberList[order].mid;
  document.querySelector(".last").textContent = memberList[order].last;

  setTimeout(() => {
    document.querySelector(".inner-left").classList.add("hide");
    document.querySelector(".hovertext").classList.remove("hide");
  }, 0);
}

function showTeamDetail() {
  document.querySelector(".inner-left").classList.remove("hide");
  document.querySelector(".hovertext").classList.add("hide");
}

ace4members.forEach((member) => {
  member.addEventListener("mouseover", showMemberDetail);
  member.addEventListener("mouseout", showTeamDetail);
});

/* ----------------------------- HAMBURGER MENU ----------------------------- */
let hamburger = document.querySelector(".hamburger-menu");
hamburger.addEventListener("click", () => {
  document.querySelector(".nav-buttons ").classList.toggle("active");
});
