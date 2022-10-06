/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["dog", "co-worker", "neighbor", "fridge"];
  let action = ["ate", "hacked", "lost", "broke"];
  let which = ["my homework", "my leg", "your car", "my phone"];

  let excuseP = document.querySelector("#excuse");
  excuseP.textContent =
    "My" +
    " " +
    who[Math.floor(Math.random() * 4)] +
    " " +
    action[Math.floor(Math.random() * 4)] +
    " " +
    which[Math.floor(Math.random() * 4)];

  console.log("Hello Rigo from the console!");
};
