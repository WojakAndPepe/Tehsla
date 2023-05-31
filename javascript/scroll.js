// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);

const content = document.querySelectorAll(".content");

const appearOptions = {
  rootMargin: "0px",
  threshold: 0.75,
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove("appear");
    } else {
      entry.target.classList.add("appear");
    }
  });
}, appearOptions);

content.forEach((section) => {
  appearOnScroll.observe(section);
});
