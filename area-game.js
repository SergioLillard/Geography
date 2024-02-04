const url =
  "https://restcountries.com/v3.1/independent?status=true&fields=name,area,cca2";

let countriesList = [];
try {
  const response = await fetch(url);
  const result = await response.json();

  countriesList = result;
} catch (error) {
  console.error(error);
}

// GET FLAGS:
const flagBox1 = document.getElementById("flag-box1");
const flagBox2 = document.getElementById("flag-box2");

// GET NAMES:
const countryName1 = document.getElementById("country-name1");
const countryName2 = document.getElementById("country-name2");

// GET AREA BOXES:
const areaBox1 = document.getElementById("area-box1");
const areaBox2 = document.getElementById("area-box2");

// GET AREA OUTPUTS:
const areaOutput1 = document.getElementById("area1");
const areaOutput2 = document.getElementById("area2");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let randomCountry1 = getRandomInt(countriesList.length);

let randomCountry2 = getRandomInt(countriesList.length);

if (randomCountry2 === randomCountry1) {
  randomCountry2 = getRandomInt(countriesList.length);
}

function getCountries() {
  let flag1 = countriesList[randomCountry1].cca2.toLowerCase();

  let flag2 = countriesList[randomCountry2].cca2.toLowerCase();

  let flagSrc1 = "https://flagcdn.com/w320/" + flag1 + ".jpg";

  let flagSrc2 = "https://flagcdn.com/w320/" + flag2 + ".jpg";

  flagBox1.src = flagSrc1;

  flagBox2.src = flagSrc2;

  countryName1.innerHTML = countriesList[randomCountry1].name.common;
  countryName2.innerHTML = countriesList[randomCountry2].name.common;
}

getCountries();

const boxes = document.getElementById("boxes");

const countryBox1 = document.getElementById("country-box1");
const countryBox2 = document.getElementById("country-box2");

const next = document.getElementById("next");

const loseScreen = document.querySelector(".lose-screen");

const loseScreenScore = document.getElementById("lose-screen-score");

const loseScreenCountry1 = document.getElementById("lose-screen-country1");
const loseScreenCountry2 = document.getElementById("lose-screen-country2");

let scoreOutput = document.getElementById("score");

let area1 = countriesList[randomCountry1].area;

let area2 = countriesList[randomCountry2].area;

console.log(area1);
console.log(area2);

let score = 0;

countryBox1.addEventListener("click", () => compareAreas(1));

countryBox2.addEventListener("click", () => compareAreas(2));

function compareAreas(e) {
  console.log(e);
  if (e === 1) {
    if (area1 > area2) {
      score++;
      scoreOutput.innerHTML = `SCORE: ${score}`;

      areaOutput1.classList.remove("hide");
      areaOutput2.classList.remove("hide");

      areaOutput1.innerHTML =
        countriesList[randomCountry1].name.common +
        " has an area of " +
        area1 +
        " km2 ";
      areaOutput2.innerHTML =
        countriesList[randomCountry2].name.common +
        " has an area of " +
        area2 +
        " km2.";

      countryBox1.classList.add("hide");
      countryBox2.classList.add("hide");

      areaBox1.classList.remove("hide");
      areaBox2.classList.remove("hide");

      areaOutput1.classList.add("green");
      areaOutput2.classList.add("red");

      next.classList.remove("hide");
    } else {
      loseScreen.classList.add("show");

      loseScreenScore.innerHTML = `Score: ${score}`;

      loseScreenCountry1.innerHTML =
        countriesList[randomCountry1].name.common + " area: " + area1 + " km2";
      loseScreenCountry2.innerHTML =
        countriesList[randomCountry2].name.common + " area: " + area2 + " km2";

      loseScreenCountry1.classList.add("red");
      loseScreenCountry2.classList.add("green");

      countryBox1.classList.add("hide");
      countryBox2.classList.add("hide");

      scoreOutput.classList.add("hide");

      boxes.classList.remove("boxes-grid");
      boxes.classList.add("boxes-flex");

      areaOutput1.classList.add("hide");
      areaOutput2.classList.add("hide");

      areaOutput1.innerHTML = "";
      areaOutput2.innerHTML = "";

      areaOutput1.classList.remove("red");
      areaOutput2.classList.remove("green");
      areaOutput2.classList.remove("red");
      areaOutput1.classList.remove("green");
    }
  } else if (e === 2) {
    if (area2 > area1) {
      score++;
      scoreOutput.innerHTML = `SCORE: ${score}`;

      areaOutput1.classList.remove("hide");
      areaOutput2.classList.remove("hide");

      areaOutput1.innerHTML =
        countriesList[randomCountry1].name.common +
        " has an area of " +
        area1 +
        " km2 ";
      areaOutput2.innerHTML =
        countriesList[randomCountry2].name.common +
        " has an area of " +
        area2 +
        " km2.";

      countryBox1.classList.add("hide");
      countryBox2.classList.add("hide");

      areaBox1.classList.remove("hide");
      areaBox2.classList.remove("hide");

      areaOutput1.classList.add("red");
      areaOutput2.classList.add("green");

      next.classList.remove("hide");
    } else {
      loseScreen.classList.add("show");

      loseScreenScore.innerHTML = `Score: ${score}`;

      loseScreenCountry1.innerHTML =
        countriesList[randomCountry1].name.common + " area: " + area1 + " km2";
      loseScreenCountry2.innerHTML =
        countriesList[randomCountry2].name.common + " area: " + area2 + " km2";

      loseScreenCountry1.classList.add("green");
      loseScreenCountry2.classList.add("red");

      countryBox1.classList.add("hide");
      countryBox2.classList.add("hide");

      scoreOutput.classList.add("hide");

      boxes.classList.remove("boxes-grid");
      boxes.classList.add("boxes-flex");

      areaOutput1.classList.add("hide");
      areaOutput2.classList.add("hide");

      areaOutput1.innerHTML = "";
      areaOutput2.innerHTML = "";

      areaOutput1.classList.remove("red");
      areaOutput2.classList.remove("green");
      areaOutput2.classList.remove("red");
      areaOutput1.classList.remove("green");
    }
  }
}

const button = document.getElementById("button");

button.addEventListener("click", resetGame);

function resetGame() {
  scoreOutput.innerHTML = "SCORE:";

  loseScreen.classList.remove("show");

  // game.classList.remove("game-over");

  loseScreenScore.innerHTML = "Score:";
  // loseScreen.classList.remove("opacity");

  countryBox1.classList.remove("hide");
  countryBox2.classList.remove("hide");

  scoreOutput.classList.remove("hide");

  boxes.classList.remove("boxes-flex");
  boxes.classList.add("boxes-grid");

  score = 0;

  randomCountry1 = getRandomInt(countriesList.length);

  randomCountry2 = getRandomInt(countriesList.length);

  if (randomCountry2 === randomCountry1) {
    randomCountry2 = getRandomInt(countriesList.length);
  }

  let flag1 = countriesList[randomCountry1].cca2.toLowerCase();

  let flag2 = countriesList[randomCountry2].cca2.toLowerCase();

  let flagSrc1 = "https://flagcdn.com/w320/" + flag1 + ".jpg";

  let flagSrc2 = "https://flagcdn.com/w320/" + flag2 + ".jpg";

  flagBox1.src = flagSrc1;

  flagBox2.src = flagSrc2;

  countryName1.innerHTML = countriesList[randomCountry1].name.common;
  countryName2.innerHTML = countriesList[randomCountry2].name.common;

  area1 = countriesList[randomCountry1].area;

  area2 = countriesList[randomCountry2].area;

  console.log(area1, area2);
  next.classList.add("hide");
  areaOutput1.classList.remove("red");
  areaOutput2.classList.remove("green");
  areaOutput2.classList.remove("red");
  areaOutput1.classList.remove("green");

  loseScreenCountry1.classList.remove("red");
  loseScreenCountry2.classList.remove("green");
  loseScreenCountry1.classList.remove("green");
  loseScreenCountry2.classList.remove("red");
}

next.addEventListener("click", nextQuestion);

function nextQuestion() {
  randomCountry1 = getRandomInt(countriesList.length);

  randomCountry2 = getRandomInt(countriesList.length);

  if (randomCountry2 === randomCountry1) {
    randomCountry2 = getRandomInt(countriesList.length);
  }

  let flag1 = countriesList[randomCountry1].cca2.toLowerCase();

  let flag2 = countriesList[randomCountry2].cca2.toLowerCase();

  let flagSrc1 = "https://flagcdn.com/w320/" + flag1 + ".jpg";

  let flagSrc2 = "https://flagcdn.com/w320/" + flag2 + ".jpg";

  flagBox1.src = flagSrc1;

  flagBox2.src = flagSrc2;

  countryName1.innerHTML = countriesList[randomCountry1].name.common;
  countryName2.innerHTML = countriesList[randomCountry2].name.common;

  area1 = countriesList[randomCountry1].area;

  area2 = countriesList[randomCountry2].area;

  console.log(area1, area2);

  countryBox1.classList.remove("hide");
  countryBox2.classList.remove("hide");

  areaBox1.classList.add("hide");
  areaBox2.classList.add("hide");

  areaOutput1.classList.add("hide");
  areaOutput2.classList.add("hide");

  areaOutput1.classList.remove("red");
  areaOutput2.classList.remove("green");
  areaOutput2.classList.remove("red");
  areaOutput1.classList.remove("green");

  next.classList.add("hide");
}
