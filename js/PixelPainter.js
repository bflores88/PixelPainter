let paintbrush = '';

let setPaintbrush = function(){
  console.log(this.style.backgroundColor);
  paintbrush = this.style.backgroundColor;
  return paintbrush;
}


let mouseDown = false;

const setPixelColor = function(){
  mouseDown = true;
  this.style.backgroundColor = paintbrush;
  this.style.borderColor = paintbrush;
  console.log(mouseDown);
}

const paintColor = function(){
  if(mouseDown === true){
    this.style.backgroundColor = paintbrush;
    this.style.borderColor = paintbrush;
  }
}

const releaseColor = function(){
  mouseDown = false;
  console.log(mouseDown);
}

const releaseMouse = function(){
    mouseDown = false;
}

document.body.addEventListener('mouseup', releaseMouse);


const showCanvasOptions = function(){
  if(myDropdown.style.display === 'block'){
    myDropdown.style.display = 'none';
  } else {
    myDropdown.style.display = 'block';
  }
}



const createPalette = function(depth, width = depth){
  let colorPalette = document.createElement('div');
  colorPalette.id = 'pixelPalette';
  container1.appendChild(colorPalette);

  for(let y=0; y<width; y++){
    let paletteRow = document.createElement('div');
    paletteRow.className = 'paletteRow'
    colorPalette.appendChild(paletteRow);

    for(let x=0; x<depth; x++){
      let swatch = document.createElement('div');
      swatch.className = 'swatch';
      swatch.style.backgroundColor = Math.floor(Math.random()*16777215).toString(16);
      paletteRow.appendChild(swatch);

      swatch.addEventListener('click', setPaintbrush);
    }
  }
}

createPalette(3, 7);




const createCanvas = function( depth, width = depth){

  const canvas = document.createElement('div');
  canvas.id = 'pixelCanvas';
  canvas.style.width = (15*depth) + 'px';
  container1.appendChild(canvas);

  for(let y=0; y<width; y++){
    let pixelRow = document.createElement('div');
    pixelRow.className = 'pixelRow'
    canvas.appendChild(pixelRow);

    for(let x=0; x<depth; x++){
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelRow.appendChild(pixel);
      
      pixel.addEventListener('mousedown', setPixelColor);
      pixel.addEventListener('mouseup', releaseColor);
      pixel.addEventListener('mouseover', paintColor);
    }
  }

}



//SEE IF CAN INCORPORATE OPTION FOR USER TO CHANGE CANVAS SIZE
createCanvas(50, 25);




//dropdown button
const dropDownButton = document.getElementsByClassName('dropBtn');
dropDownButton[0].addEventListener('click', showCanvasOptions);

