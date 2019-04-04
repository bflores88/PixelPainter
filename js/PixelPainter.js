let mouseDown = false;
let paintbrush = 'white';
const originalBorder = 'lightgray';

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

//Canvas Nav Bar - fill
const createFill = document.createElement('div');
createFill.className = 'dropdown';
createFill.id = 'fillDiv';
createCanvasNav.appendChild(createFill);

const createFillButton = document.createElement('button');
createFillButton.className = 'dropbtn iconButton';
createFillButton.id = 'floodfill';
createFillButton.style.backgroundColor = paintbrush;
createFill.appendChild(createFillButton);

const fillIcon = document.createElement('i');
fillIcon.id = 'fillID';
fillIcon.className = 'fas fa-fill-drip';
createFillButton.appendChild(fillIcon);

const fillContent = document.createElement('div');
fillContent.id = 'eraserContent';
fillContent.innerHTML = '  Fill';
createFillButton.appendChild(fillContent);

//Canvas Nav Bar - eraser
const createEraser = document.createElement('div');
createEraser.className = 'dropdown';
createEraser.id = 'eraserDiv';
createCanvasNav.appendChild(createEraser);

const createEraserButton = document.createElement('button');
createEraserButton.className = 'dropbtn iconButton';
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
eraseSingle.addEventListener('click', function () {
  paintbrush = 'white';
  floodfill.style.backgroundColor = 'white';
})

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

//Canvas Nav Bar - change palette color
const paletteCreator = document.createElement('div');
paletteCreator.className = 'dropdown';
paletteCreator.id = 'paletteGenerator';
createCanvasNav.appendChild(paletteCreator);

const paletteCreatorButton = document.createElement('button');
paletteCreatorButton.className = 'dropbtn';
paletteCreatorButton.id = 'paletteGeneratorButton';
paletteCreatorButton.innerHTML = 'New Palette';
paletteCreator.appendChild(paletteCreatorButton);

//Canvas Nav Bar - save
const createSave = document.createElement('div');
createSave.className = 'dropdown';
createSave.id = 'saveDiv';
createCanvasNav.appendChild(createSave);

const createSaveButton = document.createElement('button');
createSaveButton.className = 'dropbtn iconButton';
createSaveButton.id = 'saveNow';
createSave.appendChild(createSaveButton);

const saveIcon = document.createElement('i');
saveIcon.id = 'saveID';
saveIcon.className = 'fas fa-save';
createSaveButton.appendChild(saveIcon);

const createSaveContent = document.createElement('div');
createSaveContent.id = 'saveContent';
createSaveContent.innerHTML = 'Save';
createSaveButton.appendChild(createSaveContent);

saveNow.addEventListener('click', savePixelCanvas);

//Canvas Nav Bar - load
const createLoad = document.createElement('div');
createLoad.className = 'dropdown';
createLoad.id = 'loadButton';
createCanvasNav.appendChild(createLoad);

const createLoadButton = document.createElement('button');
createLoadButton.className = 'dropbtn';
createLoadButton.id = 'loadLast';
createLoadButton.innerHTML = 'Load';
createLoad.appendChild(createLoadButton);

createLoadButton.addEventListener('click', loadLocalStorage);

//Palette & canvas container
const createContainer1 = document.createElement('div');
createContainer1.id = 'container1';
document.body.appendChild(createContainer1);

let setPaintbrush = function () {
  paintbrush = this.style.backgroundColor;
  floodfill.style.backgroundColor = paintbrush;
  return paintbrush;
}

const setPixelColor = function () {
  mouseDown = true;
  this.style.backgroundColor = paintbrush;
  this.style.borderColor = originalBorder;
  if (paintbrush !== 'white') {
    this.style.borderColor = paintbrush;
  }
}

const paintColor = function () {
  if (mouseDown === true) {
    this.style.backgroundColor = paintbrush;
    this.style.borderColor = originalBorder;
    if (paintbrush !== 'white') {
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

//Palette generator
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

//Default palette onload
createRandomPalette(4, 10);

paletteGeneratorButton.addEventListener('click', function () {
  randomPixelPalette.remove();
  createRandomPalette(4, 10);
})

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
      pixel.dataset.column = x;
      pixel.dataset.row = y;
      pixelRow.appendChild(pixel);

      pixel.addEventListener('mousedown', setPixelColor);
      pixel.addEventListener('mouseup', releaseColor);
      pixel.addEventListener('mouseover', paintColor);
    }
  }
}

//Default canvas onload
createCanvas(50, 25);

let canvas = document.querySelector('#pixelCanvas');

//Save to local storage
function savePixelCanvas() {
  let key = 'yourPixelPainterKey';
  let value = canvas.innerHTML;
  localStorage.setItem(key, value);
}

//Load from local storage
function loadLocalStorage() {
  let reload = localStorage.getItem('yourPixelPainterKey');
  canvas.innerHTML = reload;

  //resets event listeners on canvas pixels
  const resetPixelEventListeners = document.getElementsByClassName('pixel');
  for (let i = 0; i < resetPixelEventListeners.length; i++) {
    resetPixelEventListeners[i].addEventListener('mousedown', setPixelColor);
    resetPixelEventListeners[i].addEventListener('mouseup', releaseColor);
    resetPixelEventListeners[i].addEventListener('mouseover', paintColor);
  }
}