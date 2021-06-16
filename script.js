window.onload = start;

function start() {
  const button = document.getElementById("button");
  const result = document.getElementById("result");
  const resultText = document.getElementById("resultText");
  const calculateIMC = (ev) => {
    ev.preventDefault();
    const weight = Number(document.getElementById("weight").value);
    const height = Number(document.getElementById("height").value);
    const message1 = document.getElementById("message1");
    const message2 = document.getElementById("message2");
    if (weight <= 0 || weight === "") {
      message1.innerHTML = "Ingrese un valor correcto";
    } else {
      message1.innerHTML = "";
    }
    if (height <= 0 || height === "") {
      message2.innerHTML = "Ingrese un valor correcto";
    } else {
      message2.innerHTML = "";
    }

    if (weight && height && weight != "0" && height != "0") {
      const value = (weight * 10000) / (height * height);
      const IMC = Number(value.toFixed(2));
      result.innerHTML = IMC;
      resultText.innerHTML = showResult(IMC);
      paintRow(IMC);
    }
  };
  button.addEventListener("click", calculateIMC);
}

function showResult(IMC) {
  if (IMC > 30) {
    return "Obesity";
  } else if (IMC >= 25) {
    return "Overweight";
  } else if (IMC >= 18.5) {
    return "Normal";
  } else {
    return "Underweight";
  }
}

function paintRow(IMC) {
  console.log(IMC);
  document.getElementById("bajoPeso").style.backgroundColor = "#eee";
  document.getElementById("normal").style.backgroundColor =
    "hsl(233, 16%, 80%)";
  document.getElementById("sobrePeso").style.backgroundColor = "#eee";
  document.getElementById("obesidad").style.backgroundColor =
    "hsl(233, 16%, 80%)";
  if (IMC > 30) {
    document.getElementById("obesidad").style.backgroundColor =
      "rgb(220, 71, 71)";
  } else if (IMC >= 25) {
    document.getElementById("sobrePeso").style.backgroundColor =
      "rgb(220, 71, 71)";
  } else if (IMC >= 18.5) {
    document.getElementById("normal").style.backgroundColor =
      "rgb(131, 223, 85)";
  } else {
    document.getElementById("bajoPeso").style.backgroundColor =
      "rgb(220, 71, 71)";
  }
}
