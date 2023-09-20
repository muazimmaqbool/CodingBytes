let canvas = document.getElementById("Scratch");
let context = canvas.getContext("2d");
const init = () => {
  let gradientColor = context.createLinearGradient(0, 0, 135, 135);
  gradientColor.addColorStop(0, "#c3a3f1");
  gradientColor.addColorStop(1, "#6414e9");
  context.fillStyle = gradientColor;
  context.fillRect(0, 0, 200, 200);
};
//initial position of mouse x and y is 0
let mouseX = 0;
let mouseY = 0;
let isDragged = false;

//for touche and mouse
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchdown",
    move: "touchmove",
    up: "touchup",
  },
};

let deviceType = "";

//for touch device
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

//for left and top of canvas
let rectLeft = canvas.getBoundingClientRect().left;
let rectTop = canvas.getBoundingClientRect().top;

//x and y position of mouse/touch
const getXY = (e) => {
  mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
  mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
};

isTouchDevice();

//start scratch
canvas.addEventListener(events[deviceType].down, (event) => {
  isDragged = true;
  //get x and y position
  getXY(event);
  scratch(mouseX, mouseY);
});

//mouse and touch move
canvas.addEventListener(events[deviceType].move, (event) => {
  if (!isTouchDevice()) {
    event.preventDefault();
  }
  if (isDragged) {
    getXY(event);
    scratch(mouseX, mouseY);
  }
});

//stop drawing
canvas.addEventListener(events[deviceType].up, () => {
  isDragged = false;
});

//is mouse leaves the square
canvas.addEventListener("mouseleave", () => {
  isDragged = false;
});

const scratch = (x, y) => {
    context.globalCompositeOperation= "destination-out";
    context.beginPath();
    context.arc(x, y, 12, 0, 2 * Math.PI);
    context.fill();
};

window.onload=init();
//lets see will it work?
//please do subscribe to my channel and source code link is in description
