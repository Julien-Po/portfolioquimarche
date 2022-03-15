function animate_Css_Circle() {
  let number = document.querySelector(".circleNumber");
  let counter = 0;
  setInterval(() => {
    if (counter == 45) {
      clearInterval();
    } else {
      counter += 1;
      number.innerHTML = counter + "%";
    }
  }, 30);
}

function animate_Js_Circle() {
  let number = document.querySelector(".Number");
  let counter = 0;
  setInterval(() => {
    if (counter == 35) {
      clearInterval();
    } else {
      counter += 1;
      number.innerHTML = counter + "%";
    }
  }, 35);
}

function animate_php_Circle() {
  let number = document.querySelector(".lstNumber");
  let counter = 0;
  setInterval(() => {
    if (counter == 30) {
      clearInterval();
    } else {
      counter += 1;
      number.innerHTML = counter + "%";
    }
  }, 40);
}

animate_Css_Circle();
animate_Js_Circle();
animate_php_Circle();
