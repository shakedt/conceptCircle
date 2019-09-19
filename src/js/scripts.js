// Becouse of the request that  the color of "hallowed" circle will be the same as the current circle color we need a shared variable.
// Currently to avoid over complicating or moving the code to a class i chose to use a 'global' variable.
let oldColor = 'blue';

// piece object
const piece = (function() {
  let el = null;
  const init = function(el) {
    this.el = el;
  };
  const moveDelta = function(dx, dy) {
    const pos = this.el.getBoundingClientRect();
    this.el.style.left = `${pos.left + dx}px`;
    this.el.style.top = `${pos.top + dy}px`;
  };
  return {
    init,
    moveDelta
  };
})();

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

const handleMouseOver = () => {
  var circle = document.getElementById('piece'); 
  oldColor = circle.style.backgroundColor;

  circle.style.border = '1px solid';
  circle.style.borderColor = oldColor;
  circle.style.backgroundColor = 'white';
}

const handleMouseLeave = () => {
  var circle = document.getElementById('piece'); 
  circle.style.border = '0px';
  circle.style.backgroundColor = oldColor; 
}

function init() {
  handleButtonListenerSetUp();
  handleResetButtonSetup();
  handleRandomButtonSetUp();
  getAndSetCircleColor();
  handleCircleMouseOverActions();
}

window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  init();
});

const handleCircleMouseOverActions = () => {
  var circle = document.getElementById('piece');
  circle.onmouseover = handleMouseOver;
  circle.onmouseleave = handleMouseLeave;
};

const handleResetButtonSetup = () => {
  const resetButton = document.getElementById('reset');

  resetButton.addEventListener("click", resetCircleLocation);
};

const createButton = (btn, x, y) => {
  btn.dataset.dx = x;
  btn.dataset.dy = y;

  btn.addEventListener("click", handleClick);
};

const resetCircleLocation = () => {
  var circle = document.getElementById('piece');
  
  // first reset all styles
  circle.style = '';
  // then set the color that came back from the api.
  circle.style.backgroundColor = oldColor;
};

const handleButtonListenerSetUp = () => {
  const $btnUp = createButton(document.getElementById("btn-up"), 0, -100);
  const $btnRight =  createButton(document.getElementById("btn-right"), 100, 0);
  const $btnDown =  createButton(document.getElementById("btn-down"), 0, 100);
  const $btnLeft = createButton(document.getElementById("btn-left"), -100, 0); 
};

const handleRandomButtonSetUp = () => {
  const randomButton = document.getElementById('random');

  randomButton.addEventListener("click",  randomizeLocation);
};

const randomizeLocation = () => {
  const circleHeight = 100;
  const circleWidth = 100;

  // Not all browsers support window.innerWidth/height, i  add also fall back on document.
  const screenHeight = (window.innerHeight || document.documentElement.clientHeight) - circleHeight;
  const screenWidth = (window.innerWidth || document.documentElement.clientHeight) - circleWidth;

  // calculate height and width randomly from 1 to screen height/ screen width.
  const height = (Math.random() * screenHeight) + 1;
  const width = (Math.random() * screenWidth) + 1;
 
  /** 
   * i chose not to use handleClick functionlity becouse the naming can be confusing.
   * It also goes through a lot  of fucntinality that isn't need in this function.
   * */
  const circle = document.getElementById('piece');
  circle.style.left = `${width}px`;
  circle.style.top = `${height}px`;
};

// Get and set circle color  from the api
const getAndSetCircleColor = () => {
  fetch('http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20avi')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const temp = myJson.current.temp_c;
    const circle = document.getElementById('piece');
    let colorToSet;
  
    if(temp <= 10) {
      colorToSet = 'blue';
    } else if (temp <= 20) {
      colorToSet = 'green';
    } else if (temp <= 30) {
      colorToSet = 'yellow';
    } else  {
      colorToSet = 'red';
    }

    circle.style.backgroundColor = colorToSet;
    oldColor = colorToSet;
  });
};