//pacman styling orientation
// Right / default - transform: rotate(0deg) scaleX(1);
// down - transform: rotate(90deg) scaleX(1);
// up - transform: rotate(-90deg) scaleX(1);
// left - transform: rotate(0deg) scaleX(-1);

const pacman = document.querySelector("#pacman");
const right = document.querySelector("#right");
const left = document.querySelector("#left");
const up = document.querySelector("#up");
const down = document.querySelector("#down");

// Function to move Pacman 50 pixels in a specific direction
function movePacman(dx, dy) {
  // Get the current left and top values
  const currentLeft = parseInt(window.getComputedStyle(pacman).left, 10) || 0;
  const currentTop = parseInt(window.getComputedStyle(pacman).top, 10) || 0;
  // CSS property values may be accessed using the getPropertyValue(propName) method or by indexing directly into the object using array or dot notation such as obj['z-index'] or obj.zIndex.
  // 'parseInt' is a JavaScript function that converts a string to an integer (a whole number).
  // Once getComputedStyle retrieves the styles for pacman, '.left' accesses the left CSS property of pacman. This property indicates the left position of the element relative to its containing element.
  // '10' is the radix parameter for parseInt, specifying that the string should be interpreted as a base-10 number (decimal).
  // '||' is the logical 'OR' operator.

  // Calculate the new position
  let newX = currentLeft + dx;
  let newY = currentTop + dy;

  // Get the gameField dimensions
  const gameField = document.querySelector("#gameField");
  const gameFieldRect = gameField.getBoundingClientRect();
  const pacmanRect = pacman.getBoundingClientRect();
  // The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
  // The getBoundingClientRect() method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.

  // Check boundaries
  if (newX < 0) {
    newX = 0;
  } else if (newX + pacmanRect.width > gameFieldRect.width) {
    newX = gameFieldRect.width - pacmanRect.width;
  }

  if (newY < 0) {
    newY = 0;
  } else if (newY + pacmanRect.height > gameFieldRect.height) {
    newY = gameFieldRect.height - pacmanRect.height;
  }

  // update the position
  pacman.style.left = newX + "px";
  pacman.style.top = newY + "px";
}

// detect keypress
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    console.log("Right");
    //   assign pacman styling
    pacman.style.transform = "rotate(0deg) scaleX(1)";
    movePacman(50, 0);
  } else if (event.key === "ArrowLeft") {
    console.log("Left");
    //   assign pacman styling
    pacman.style.transform = "rotate(0deg) scaleX(-1)";
    movePacman(-50, 0);
  } else if (event.key === "ArrowUp") {
    console.log("Up");
    //   assign pacman styling
    pacman.style.transform = "rotate(-90deg) scaleX(1)";
    movePacman(0, -50);
  } else if (event.key === "ArrowDown") {
    console.log("Down");
    //   assign pacman styling
    pacman.style.transform = "rotate(90deg) scaleX(1)";
    movePacman(0, 50);
  }
});

// Assigning action to button to execute pacman movement similar to the keypress

up.addEventListener("click", function () {
  console.log("up button clicked");
  pacman.style.transform = "rotate(-90deg) scaleX(1)";
  movePacman(0, -50);
});

down.addEventListener("click", function () {
  console.log("down button clicked");
  pacman.style.transform = "rotate(90deg) scaleX(1)";
  movePacman(0, 50);
});

left.addEventListener("click", function () {
  console.log("left button clicked");
  pacman.style.transform = "rotate(0deg) scaleX(-1)";
  movePacman(-50, 0);
});

right.addEventListener("click", function () {
  console.log("right button clicked");
  pacman.style.transform = "rotate(0deg) scaleX(1)";
  movePacman(50, 0);
});
