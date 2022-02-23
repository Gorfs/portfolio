const navToggle = document.querySelector(".nav__toggle")
const links = document.querySelector(".nav__links")

console.log(navToggle, links)

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links")
  console.log("got here")
})
