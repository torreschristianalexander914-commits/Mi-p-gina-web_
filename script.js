let lastScrollTop = 0;
const header = document.querySelector("header");
const toTop = document.querySelector(".to-top");
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 300) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

// Botón Discover More
const discoverBtn = document.querySelector(".car-status button");

if (discoverBtn) {
  discoverBtn.addEventListener("click", () => {
    document.querySelector("#interior").scrollIntoView({
      behavior: "smooth"
    });
  });
}

// Botón Explore
const exploreBtn = document.querySelector(".extra-nav button");

if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    document.querySelector("#spec").scrollIntoView({
      behavior: "smooth"
    });
  });
}