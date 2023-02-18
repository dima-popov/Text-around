function drawCircle(value) {
  var text = "||||||||||||";
  if (value && value != "") {
    text = value;
  }

  const word = text.split("");

  const quantity = word.length;

  const radius = 150;

  const padding = 300;

  const radians = 3.1415; // Max radians value (full circle)

  const angle = 360 / (2 * Math.PI); //angle to radian relation

  const point = Math.PI / quantity;

  const step = (2 * Math.PI) / quantity;

  const elm_arr = [];

  for (let i = 0, j = 0; i < radians; i += point, j++) {
    const cat_oppos = Math.sin(step * j) * radius;
    const cat_attach = Math.cos(step * j) * radius;

    const elm = document.createElement("div");
    elm.innerHTML = word[j];
    elm.classList.add("dot");

    elm.style.top = padding + cat_oppos + "px";
    elm.style.left = padding + cat_attach + "px";
    elm.style.transform = "rotate(" + (angle * (step * j) + 90) + "deg)";

    elm_arr.push(elm);
  }

  const elm = document.createElement("div");
  elm.innerHTML = "|";
  elm.classList.add("dot");

  elm.style.top = padding + "px";
  elm.style.left = padding + "px";

  elm_arr.push(elm);

  return elm_arr;
}
