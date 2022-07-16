window.onload = () => {
  loadColorBtn();
};

const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

let loadColorBtn = () => {
  let html = "";
  colorList.forEach((color, index) => {
    if (index === 0) {
      html += `<button class="color-button ${color} active" onclick="changeHouseColor('${color}')"></button>`;
    } else {
      html += `<button class="color-button ${color}" onclick="changeHouseColor('${color}')"></button>`;
    }
  });
  document.querySelector("#colorContainer").innerHTML = html;
};

window.changeHouseColor = (color) => {
  let lastBtn = document.getElementsByClassName("active");
  let lastColor = lastBtn[0].classList[1];
  lastBtn[0].classList.remove("active");

  let currentBtn = document.getElementsByClassName("color-button " + color);
  currentBtn[0].classList.add("active");

  document.querySelector("#house").classList.remove(lastColor);
  document.querySelector("#house").classList.add(color);
};
