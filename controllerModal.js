const close = document.getElementById("img-close");
const recomendation1 = document
  .getElementById("recomendation1")
  .addEventListener("click", showModal);
const recomendation2 = document
  .getElementById("recomendation2")
  .addEventListener("click", showModal);
const recomendation3 = document
  .getElementById("recomendation3")
  .addEventListener("click", showModal);
const recomendation4 = document
  .getElementById("recomendation4")
  .addEventListener("click", showModal);

const recomendations = {
  recomendation1: {
    r1: "Choose foods rich in nutrients and proteins.",
    r2: "Eat food more often.",
    r3: "Drink smoothies and fruit smoothies.",
  },
  recomendation2: {
    r1: "Leading an active life, sedentary lifestyle only brings inconvenience to our health.",
    r2: "Take care of the daily diet.",
    r3: "Mantain a normal weight.",
  },
  recomendation3: {
    r1: "Limit the consumption of foods rich in sugars and fats.",
    r2: "Eat fruits and vegetables several times a day.",
    r3: "Do frequent physical activity ",
  },

  recomendation4: {
    r1: "Limit the consumption of foods rich in sugars and fats.",
    r2: "Eat fruits and vegetables several times a day, as well as legumes, whole grains and nuts",
    r3: "Do frequent physical activity: about 60 minutes a day for young people and 150 minutes a week for adults.",
  },
};
function closeModal() {
  document.getElementById("container-modalId").classList.remove("showModal");
  document.getElementById("body-container").classList.remove("opacity");
}
close.addEventListener("click", closeModal);

function showModal(ev) {
  const value = ev.target.id;
  const r1 = document.getElementById("r1");
  const r2 = document.getElementById("r2");
  const r3 = document.getElementById("r3");
  r1.innerHTML = recomendations[value].r1;
  r2.innerHTML = recomendations[value].r2;
  r3.innerHTML = recomendations[value].r3;
  document.getElementById("container-modalId").classList.add("showModal");
  setTimeout(function () {
    document.getElementById("body-container").classList.add("opacity");
  }, 100);
}
