const container = document.querySelector(".container");
const section = document.querySelector("section");
container.addEventListener("scroll", function (event) {
  console.log(container.scrollTop);
});

container.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (container.scrollTop > 300) {
    header.classList.add("scrolled");
  } else if (container.scrollTop < 300) {
    header.classList.remove("scrolled");
  } else {
    header.classList.add("scrolled");
  }
});

// //5400

// //6400

// //7560
