var btn_array = document.querySelectorAll("button");

var counter = document.querySelector(".count");

var count = 0;

for (let index = 0; index < btn_array.length; index++) {
  btn_array[index].addEventListener("click", function () {
    setText(this.innerHTML);

    setColor(counter,count);
  });
}

function setText(text) {
  switch (text) {
    case "Reset":
      count = 0;
      break;
    case "Decrease":
      count -= 1;
      break;
    case "Increase":
      count += 1;
      break;
    default:
      console.log(this.innerHTML);
      break;
  }
  counter.innerHTML = count;
}

function setColor(text, count) {
  if (hasClass(text, classes)) {
    var currentClass = hasClass(text, classes);
    text.classList.remove(currentClass);
  }
  if (count > 0) {
      text.classList.add("pos");
  } else if (count < 0) {
      text.classList.add("neg");
  } else {
      text.classList.add("zero");
  }
}

var classes = ["pos", "neg", "zero"];

function hasClass(element, classes) {
  for (let index = 0; index < classes.length; index++) {
    if (element.classList.contains(classes[index])) {
      return classes[index];
    }
  }
}
