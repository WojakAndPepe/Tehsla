const container = document.querySelector(".container");
const section = document.querySelector("section");
container.addEventListener("scroll", function (event) {
  console.log(section.classList);
});

container.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (container.scrollTop > 0 && container.scrollTop < 5399) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// //5400

// //6400

// //7560
