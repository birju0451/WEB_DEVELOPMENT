const form = document.getElementById("bodyForm");
const display = document.getElementById("display");

function loadInfo() {
  const info = JSON.parse(localStorage.getItem("bodyInfo"));
  if (info) {
    display.innerHTML = `
      Name: ${info.name}<br>
      Age: ${info.age}<br>
      Height: ${info.height} cm<br>
      Weight: ${info.weight} kg
    `;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const info = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    height: document.getElementById("height").value,
    weight: document.getElementById("weight").value,
  };
  localStorage.setItem("bodyInfo", JSON.stringify(info));
  loadInfo();
  form.reset();
});

window.onload = loadInfo;
