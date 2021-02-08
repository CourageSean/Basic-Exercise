let navChange = document.getElementById("navChange");
let navHome = document.getElementById("navHome");

function homeChange() {
  navHome.style.backgroundColor = "orange";
  navHome.style.direction = "rtl";
}

let vorname = document.getElementById("vorname");
let nachname = document.getElementById("nachname");
let land = document.getElementById("land");

function screen() {
  console.log(vorname.value);
  console.log(nachname.value);
  console.log(land.value);
}
