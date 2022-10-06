/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["dog", "co-worker", "neighbor", "fridge"];
  let action = ["ate", "hacked", "lost", "broke"];
  let what = ["my homework", "my leg", "your car", "my phone"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch"
  ];

  let excuseP = document.querySelector("#excuse");
  excuseP.textContent =
    "My" +
    " " +
    who[Math.floor(Math.random() * 4)] +
    " " +
    action[Math.floor(Math.random() * 4)] +
    " " +
    what[Math.floor(Math.random() * 4)] +
    " " +
    when[Math.floor(Math.random() * 4)];

  console.log("Hello Rigo from the console!");
};

/*Cuando dice hacked my leg imaginen que es una pierna inteligente 🤣*/
