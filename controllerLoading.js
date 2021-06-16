const loading = document.getElementById("loading");
const bodyContainer = document.getElementById("body-container");

setTimeout(() => {
  loading.classList.add("hidden");
  bodyContainer.classList.remove("hidden");
}, 2000);
