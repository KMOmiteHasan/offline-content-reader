const contentCardContainer = document.querySelector(
  "[data-contents-cards-container]"
);
const searchInput = document.querySelector("[data-search]");
let contents = document.querySelectorAll(".card h2");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  console.log(value);
  console.log(contents);
  contents.forEach((content) => {
    const isVisible = content.innerHTML.toLowerCase().includes(value);
    content.parentElement.classList.toggle("hide", !isVisible);
    console.log(contentCardContainer.childNodes);
  });
});
