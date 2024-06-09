const key1 = document.querySelector("#key1");
const key2 = document.querySelector("#key2");
const key3 = document.querySelector("#key3");
// addEventListener(a, b)
// a: event name
// b: function to call when event is triggered
// document.addEventListener("keydown", function () {
//   console.log("key pressed");
// });

// document.addEventListener("keyup", function () {
//   console.log("key released");
// });

document.addEventListener("keydown", function (event) {
  if (event.key === "k") {
    alert("You pressed k button");
  }
  console.log(event);
  key1.innerText = event.key;
  key2.innerText = event.code;
  key3.innerText = event.keyCode;
});
