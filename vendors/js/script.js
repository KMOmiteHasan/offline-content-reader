const contentCardContainer = document.querySelector(
  "[data-contents-cards-container]"
);
const searchInput = document.querySelector("[data-search]");
let contents = document.querySelectorAll(".card h2");
let noContent = document.querySelector(".no-card");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  contents.forEach((content) => {
    const isVisible = content.innerHTML.toLowerCase().includes(value) || content.nextElementSibling.innerHTML.includes(value)
    content.parentElement.classList.toggle("hide", !isVisible);
  });
  noContent.classList.add("show");
  for (let i = 0; i < contents.length; i++) {
    if (!contents[i].parentElement.classList.contains("hide")) {
      noContent.classList.remove("show");
    }
  }
});
