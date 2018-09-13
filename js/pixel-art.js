var nombresDeColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//Selecciono elementos paleta y grilla-pixeles del DOM y lo guardo en dos variables
const paleta = document.getElementById('paleta');
const grillaPixeles = document.getElementById('grilla-pixeles');

/*Se genera paleta de colores dinámicamente recorriendo nombreColores. Se crea un div por cada color, se cambia el color del fondo del mismo
Y se agrega como hijo de la constante paleta*/
function generarPaletaColores(){
  for (let i = 0; i < nombresDeColores.length; i++){
    let coloresRecorridos = document.createElement('div');
    coloresRecorridos.className = 'color-paleta';
    coloresRecorridos.style.backgroundColor = nombresDeColores[i];
    paleta.appendChild(coloresRecorridos);  
  }
}

//Se genera donde el usuario podria pintar

function generarGrilla(){
  for (i = 0; i < 1750; i++){
      let nuevaGrilla = document.createElement('div');
      grillaPixeles.appendChild(nuevaGrilla);

  }
}

generarPaletaColores();
generarGrilla();
borrarGrillaPixeles();

//Borrar grilla




//Funcion para la seleccion de colores

let colorClickeado = document.getElementById("indicador-de-color");
paleta.addEventListener("click",mostrarSeleccionColor);


function mostrarSeleccionColor(e){
  colorClickeado.style.backgroundColor = e.target.style.backgroundColor;
}

//Funcion para pintar un pixel de la grilla

grillaPixeles.addEventListener("click",pintarPixel);

function pintarPixel(e){
  e.target.style.backgroundColor = colorClickeado.style.backgroundColor;
}


// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function(e) {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    colorClickeado.style.backgroundColor = colorActual;

  })
);

//Funcion para detectar si el mouse esta apretado o no

let verificarSiHayClick;

grillaPixeles.addEventListener('mousedown', mouseClickeado);
grillaPixeles.addEventListener('mouseup', mouseNoClickeado);

function mouseClickeado(e){
  verificarSiHayClick = true;  
  console.log("click");
}

function mouseNoClickeado (e){
  verificarSiHayClick = false;
  console.log("no click");
}

//Pintar en movimiento

grillaPixeles.addEventListener('mouseover',pintarMientrasSeMueveElMouse);

function pintarMientrasSeMueveElMouse(e){
  if (verificarSiHayClick){
    e.target.style.backgroundColor = colorClickeado.style.backgroundColor;
  }
}

function borrarGrillaPixeles(){
  const grillaABorrar = $("#grilla-pixeles").find("div");
$("button").click(function(){
  $(grillaABorrar).fadeOut(1000);
  generarGrilla();
  }
);
}