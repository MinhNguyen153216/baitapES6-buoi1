document.querySelector("#btnKhoi1").onclick = () => {
  let toan = +document.querySelector("#inpToan").value;
  let ly = +document.querySelector("#inpLy").value;
  let hoa = +document.querySelector("#inpHoa").value;

  if (isNaN(toan) || isNaN(ly) || isNaN(hoa)) {
    alert("Form nhập không hợp lệ");
  } else {
    if (toan > 10 || toan < 0 || ly > 10 || ly < 0 || hoa > 10 || hoa < 0) {
      alert("Form nhập không hợp lệ");
    } else {
      let result = calc(toan, ly, hoa);
      document.querySelector("#tbKhoi1").innerHTML = result;
    }
  }
};

document.querySelector("#btnKhoi2").onclick = () => {
  let van = +document.querySelector("#inpVan").value;
  let su = +document.querySelector("#inpSu").value;
  let dia = +document.querySelector("#inpDia").value;
  let english = +document.querySelector("#inpEnglish").value;

  if (isNaN(van) || isNaN(su) || isNaN(dia) || isNaN(english)) {
    alert("Form nhập không hợp lệ");
  } else {
    if (
      van > 10 ||
      van < 0 ||
      su > 10 ||
      su < 0 ||
      dia > 10 ||
      dia < 0 ||
      english > 10 ||
      english < 0
    ) {
      alert("Form nhập không hợp lệ");
    } else {
      let result = calc(van, su, dia, english);
      document.querySelector("#tbKhoi2").innerHTML = result;
    }
  }
};

let calc = (...listPoint) => {
  let result = 0;
  listPoint.forEach((point, index) => {
    result += point;
  });
  result = result / listPoint.length;

  return result.toFixed(2);
};
