var cubes = [];

// Generate a random cube object
function generateCube() {
  var cube = {
    id: cubes.length + 1,
    size: getRandomSize(),
    color: getRandomColor(),
  };
  return cube;
}

// Generate a random size for the cube
function getRandomSize() {
  return Math.floor(Math.random() * 100) + 1;
}

// Generate a random color for the cube
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function renderCubes() {
  var cubeContainer = document.getElementById("cube-container");
  cubeContainer.innerHTML = "";

  cubes.forEach(function (cube) {
    var cubeElement = document.createElement("div");
    cubeElement.className = "cube";
    cubeElement.style.width = cube.size + "px";
    cubeElement.style.height = cube.size + "px";
    cubeElement.style.backgroundColor = cube.color;
    cubeElement.innerHTML = cube.id;

    cubeContainer.appendChild(cubeElement);
  });
}

function pushCube() {
  var cube = generateCube();
  cubes.push(cube);
  renderCubes();
}

function popCube() {
  if (cubes.length > 0) {
    cubes.pop();
    renderCubes();
  }
}

function unshiftCube() {
  var cube = generateCube();
  cubes.unshift(cube);
  renderCubes();
}

function shiftCube() {
  if (cubes.length > 0) {
    cubes.shift();
    renderCubes();
  }
}

function deleteCube() {
  if (cubes.length > 0) {
    var randomIndex = Math.floor(Math.random() * cubes.length);
    cubes.splice(randomIndex, 1);
    renderCubes();
  }
}

function sortCubes() {
  cubes.sort(function (a, b) {
    return a.size - b.size;
  });
  renderCubes();
}

document.getElementById("push-cube").addEventListener("click", pushCube);
document.getElementById("pop-cube").addEventListener("click", popCube);
document.getElementById("unshift-cube").addEventListener("click", unshiftCube);
document.getElementById("shift-cube").addEventListener("click", shiftCube);
document.getElementById("delete-cube").addEventListener("click", deleteCube);
document.getElementById("sort-cubes").addEventListener("click", sortCubes);

// Randomly generate a number of cubes
var numOfCubes = Math.floor(Math.random() * 8) + 3;
for (var i = 0; i < numOfCubes; i++) {
  cubes.push(generateCube());
}

// Initial rendering of cubes
renderCubes();
