//Create HTML elements

//Canvas Nav Bar
const createCanvasNav = document.createElement('div');
createCanvasNav.id = 'canvasNav';
document.body.appendChild(createCanvasNav);


//Canvas Nav Bar - canvas sizes
const createCanvasDropdown = document.createElement('div');
createCanvasDropdown.className = 'dropdown';
createCanvasNav.appendChild(createCanvasDropdown);

const createCanvasButton = document.createElement('button');
createCanvasButton.className = 'dropbtn';
createCanvasButton.innerHTML = 'Canvas Size';
createCanvasDropdown.appendChild(createCanvasButton);

const createCanvasDropdownDiv = document.createElement('div');
createCanvasDropdownDiv.id = 'canvasDropdownDiv';
createCanvasDropdownDiv.className = 'dropdownContent';
createCanvasButton.appendChild(createCanvasDropdownDiv);

const canvasSmall = document.createElement('div');
canvasSmall.className = 'canvasSizes';
canvasSmall.innerHTML = 'Small';
createCanvasDropdownDiv.appendChild(canvasSmall);

const canvasMedium = document.createElement('div');
canvasMedium.className = 'canvasSizes';
canvasMedium.innerHTML = 'Medium (default)';
createCanvasDropdownDiv.appendChild(canvasMedium);

const canvasLarge = document.createElement('div');
canvasLarge.className = 'canvasSizes';
canvasLarge.innerHTML = 'Large';
createCanvasDropdownDiv.appendChild(canvasLarge);

const showCanvasOptions = function () {
  if (canvasDropdownDiv.style.display === 'block') {
    canvasDropdownDiv.style.display = 'none';
  } else {
    canvasDropdownDiv.style.display = 'block';
  }
}

const dropDownButton = document.getElementsByClassName('dropBtn');
dropDownButton[0].addEventListener('click', showCanvasOptions);

const getCanvasSizes = document.getElementsByClassName('canvasSizes');

getCanvasSizes[0].addEventListener('click', function () {
  pixelCanvas.remove();
  createCanvas(20, 20);
})

getCanvasSizes[1].addEventListener('click', function () {
  pixelCanvas.remove();
  createCanvas(50, 25);
})

getCanvasSizes[2].addEventListener('click', function () {
  pixelCanvas.remove();
  createCanvas(50, 40);
})

//Canvas Nav Bar - eraser
const createEraser = document.createElement('div');
createEraser.className = 'dropdown';
createEraser.id = 'eraserDiv';
createCanvasNav.appendChild(createEraser);

const createEraserButton = document.createElement('button');
createEraserButton.className = 'dropbtn';
createEraserButton.id = 'eraseSingle';
createEraser.appendChild(createEraserButton);

const eraserIcon = document.createElement('i');
eraserIcon.id = 'eraserID';
eraserIcon.className = 'fas fa-eraser';
createEraserButton.appendChild(eraserIcon);

const createEraserContent = document.createElement('div');
createEraserContent.id = 'eraserContent';
createEraserContent.innerHTML = '  Erase';
createEraserButton.appendChild(createEraserContent);

const setEraser = document.getElementById('eraseSingle');
eraseSingle.addEventListener('click', function(){paintbrush = 'white'})

//Canvas Nav Bar - clear canvas
const createClear = document.createElement('div');
createClear.className = 'dropdown';
createClear.id = 'clearButton';
createCanvasNav.appendChild(createClear);

const createClearButton = document.createElement('button');
createClearButton.className = 'dropbtn';
createClearButton.id = 'clearAll';
createClearButton.innerHTML = 'Clear Canvas';
createClear.appendChild(createClearButton);

const startBlank = function () {
  let collectPixels = document.getElementsByClassName('pixel');
  console.log(collectPixels);

  for (let i = 0; i < collectPixels.length; i++) {
    collectPixels[i].style.backgroundColor = 'transparent';
    collectPixels[i].style.borderColor = 'lightgrey';
  }
}

clearAll.addEventListener('click', startBlank);

//Change palette color
const paletteCreator = document.createElement('div');
paletteCreator.className = 'dropdown';
paletteCreator.id = 'paletteGenerator';
createCanvasNav.appendChild(paletteCreator);

const paletteCreatorButton = document.createElement('button');
paletteCreatorButton.className = 'dropbtn';
paletteCreatorButton.id = 'paletteGeneratorButton';
paletteCreatorButton.innerHTML = 'New Palette';
paletteCreator.appendChild(paletteCreatorButton);


//Palette & canvas container
const createContainer1 = document.createElement('div');
createContainer1.id = 'container1';
document.body.appendChild(createContainer1);

let paintbrush = '';
const originalBorder = 'lightgray';

let setPaintbrush = function () {
  paintbrush = this.style.backgroundColor;
  return paintbrush;
}

let mouseDown = false;

const setPixelColor = function () {
  mouseDown = true;
  this.style.backgroundColor = paintbrush;
  this.style.borderColor = originalBorder;
    if (paintbrush !== 'white'){
      this.style.borderColor = paintbrush;
    } 
}

const paintColor = function () {
  if (mouseDown === true) {
    this.style.backgroundColor = paintbrush;
    this.style.borderColor = originalBorder;
    if (paintbrush !== 'white'){
      this.style.borderColor = paintbrush;
    } 
  }
}

const releaseColor = function () {
  mouseDown = false;
  console.log(mouseDown);
}

const releaseMouse = function () {
  mouseDown = false;
}

document.body.addEventListener('mouseup', releaseMouse);

let colorPalette = document.createElement('div');
colorPalette.id = 'pixelPalette';
createContainer1.appendChild(colorPalette);

const createRandomPalette = function (depth, width = depth) {
  let newPalette = document.createElement('div');
  newPalette.id = 'randomPixelPalette';
  colorPalette.appendChild(newPalette);

  for (let y = 0; y < width; y++) {
    let paletteRow = document.createElement('div');
    paletteRow.className = 'paletteRow'
    newPalette.appendChild(paletteRow);

    for (let x = 0; x < depth; x++) {
      let swatch = document.createElement('div');
      swatch.className = 'swatch';
      swatch.style.backgroundColor = Math.floor(Math.random() * 16777215).toString(16);
      paletteRow.appendChild(swatch);

      swatch.addEventListener('click', setPaintbrush);
    }
  }
}

//Invoke create palette function
createRandomPalette(4, 10);

//Create canvas
const createCanvas = function (depth, width = depth) {
  const canvas = document.createElement('div');
  canvas.id = 'pixelCanvas';
  canvas.style.width = (15 * depth) + 'px';
  createContainer1.appendChild(canvas);

  for (let y = 0; y < width; y++) {
    let pixelRow = document.createElement('div');
    pixelRow.className = 'pixelRow'
    canvas.appendChild(pixelRow);

    for (let x = 0; x < depth; x++) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.id = "x: " + x + ", y: " + y;
      pixelRow.appendChild(pixel);

      pixel.addEventListener('mousedown', setPixelColor);
      pixel.addEventListener('mouseup', releaseColor);
      pixel.addEventListener('mouseover', paintColor);
    }
  }
}

//SEE IF CAN INCORPORATE OPTION FOR USER TO CHANGE CANVAS SIZE
createCanvas(50, 25);


paletteGeneratorButton.addEventListener('click', function(){
  randomPixelPalette.remove();
  createRandomPalette(4, 10);
})
