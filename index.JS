const LinkButton = document.querySelector(".btn")
const links = document.querySelector(".nav__optionsContainer")
LinkButton.addEventListener("click", () => {
  console.log("hello World")
  links.classList.toggle("show-links")
})
