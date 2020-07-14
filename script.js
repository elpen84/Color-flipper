const colors = ["green", "red", "blue", "purple"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //random number
  const randomNumber = Math.floor(Math.random() * 3);
  document.body.style.background = colors[randomNumber];
});
