const colors = ["green", "red", "blue", "purple"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //random number
  const randomNumber = Math.floor(Math.random() * colors.length);
  // set color
  document.body.style.background = colors[randomNumber];
  // update color text
  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber];
});
