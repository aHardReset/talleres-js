// Codigo del cuadrado
const squareSide = 5;
const squarePerimeter = (side) => side * 4;
const squareArea = (side) => Math.pow(side, 2);

console.group("Calculos del cuadrado");
console.log("Los lados del cuadrado miden: " + squareSide + " cm");
console.log(
  "El périmetro del cuadrado es: " + squarePerimeter(squareSide) + " cm"
);
console.log("El área del cuadrado es: " + squareArea(squareSide) + " cm2");

console.groupEnd();

// Codigo del triangulo
const triangleSide1 = 5;
const triangleSide2 = 6;
const triangleBase = 7;
const triangleHeight = 5.5;
const trianglePerimeter = (side1, side2, side3) =>
  Number(side1) + Number(side2) + Number(side3);
const triangleArea = (base, height) => (base * height) / 2;

console.group("Calculos del triángulo");
console.log(
  "Los lados del triángulo miden: " +
    triangleSide1 +
    " cm, " +
    triangleSide2 +
    " cm y " +
    triangleBase +
    " cm"
);
console.log("La altura del triángulo es: " + triangleHeight + " cm");
console.log(
  "El périmetro del triángulo es: " +
    trianglePerimeter(triangleSide1, triangleSide2, triangleBase) +
    " cm"
);
console.log(
  "El área del triángulo es: " +
    triangleArea(triangleBase, triangleHeight) +
    " cm2"
);

console.groupEnd();

const circleRadius = 5;
const circleDiameter = (radius) => radius * 2;
const circleCircumference = (radius) => Math.PI * circleDiameter(radius);
const circleArea = (radius) => Math.PI * Math.pow(radius, 2);

console.group("Calculos del circulo");
console.log("El radio del circulo es: " + circleRadius + " cm");
console.log(
  "El diametro del circulo es: " + circleDiameter(circleRadius) + " cm"
);
console.log(
  "La circunferencia del circulo es: " +
    circleCircumference(circleRadius) +
    " cm"
);
console.log("El area del circulo es: " + circleArea(circleRadius) + " cm2");

console.groupEnd();

// interactuando con HTML

function squarePerimeterRequest() {
  const side = document.getElementById("squareSide").value;
  const perimeter = squarePerimeter(side);
  alert(perimeter + " u");
}

function squareAreaRequest() {
  const side = document.getElementById("squareSide").value;
  const area = squareArea(side);
  alert(area + " u2");
}

function trianglePerimeterRequest() {
  const side1 = document.getElementById("triangleSide1").value;
  const side2 = document.getElementById("triangleSide2").value;
  const base = document.getElementById("triangleBase").value;
  const perimeter = trianglePerimeter(side1, side2, base);
  alert(perimeter + " u");
}

function triangleAreaRequest() {
  const base = document.getElementById("triangleBase").value;
  const height = document.getElementById("triangleHeight").value;
  const area = triangleArea(base, height);
  alert(area + " u2");
}

function circleDiameterRequest() {
  const radius = document.getElementById("circleRadius").value;
  const diameter = circleDiameter(radius);
  alert(diameter + " u");
}

function circleCircumferenceRequest() {
  const radius = document.getElementById("circleRadius").value;
  const circumference = circleCircumference(radius);
  alert(circumference + " u");
}

function circleAreaRequest() {
  const radius = document.getElementById("circleRadius").value;
  const area = circleArea(radius);
  alert(area + " u2");
}

// Reto
const isoscelesHeight = (base, side1, side2) => {
  if (side1 !== side2) {
    alert("No es un triangulo isosceles");
    return -1;
  }
  const legA = base / 2;
  const hypotenuse = side1;
  const squareSubtraction = Math.pow(hypotenuse, 2) - Math.pow(legA, 2);
  if (squareSubtraction <= 0) {
    alert("No se puede formar un triangulo con esas dimensiones");
    return -1;
  }
  return Math.sqrt(squareSubtraction);
};

function isoscelesHeightRequest() {
  const base = document.getElementById("isoscelesBase").value;
  const side1 = document.getElementById("isoscelesSide1").value;
  const side2 = document.getElementById("isoscelesSide2").value;

  const legB = isoscelesHeight(base, side1, side2);
  alert(legB + " u");
}
