let hello = document.getElementById("hello");

function small() {
  hello.classList.add("small");
  hello.classList.remove("medium");
  hello.classList.remove("big");
}

function medium() {
  hello.classList.add("medium");
  hello.classList.remove("small");
  hello.classList.remove("big");
}

function big() {
  hello.classList.add("big");
  hello.classList.remove("medium");
  hello.classList.remove("small");
}

document.getElementById("body") = body;

function generate() {
  let a = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);
  let c = Math.ceil(Math.random() * 255);

  body.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
}
