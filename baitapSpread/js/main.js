window.onload = () => {
  jumpText();
};

let jumpText = () => {
  let text = document.querySelector(".heading").innerHTML;
  let arrText = [...text];
  let html = "";
  arrText.forEach((char, index) => {
    html += `<span>${char}</span>`
  });

  document.querySelector(".heading").innerHTML = html;
};
