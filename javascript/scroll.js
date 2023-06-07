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
