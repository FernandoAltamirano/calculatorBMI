const weight = document.getElementById("weight");
const height = document.getElementById("height");

weight.addEventListener("keyup", function () {
  if (weight.value.length >= 1) {
    this.nextElementSibling.classList.add("fixed");
  } else {
    this.nextElementSibling.classList.remove("fixed");
  }
});

height.addEventListener("keyup", function () {
  if (height.value.length >= 1) {
    this.nextElementSibling.classList.add("fixed");
  } else {
    this.nextElementSibling.classList.remove("fixed");
  }
});
