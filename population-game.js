const url =
  "https://restcountries.com/v3.1/independent?status=true&fields=name,population,area,cca2";

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

// GET POPULATION:
const populationOutput1 = document.getElementById("population1");
const populationOutput2 = document.getElementById("population2");

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

const game = document.getElementById("game");

const loseScreen = document.querySelector(".lose-screen");

const loseScreenScore = document.getElementById("lose-screen-score");

let scoreOutput = document.getElementById("score");

let population1 = countriesList[randomCountry1].population;

let population2 = countriesList[randomCountry2].population;

console.log(population1);
console.log(population2);

let score = 0;

countryBox1.addEventListener("click", () => comparePopulations(1));

countryBox2.addEventListener("click", () => comparePopulations(2));

function comparePopulations(e) {
  console.log(e);
  if (e === 1) {
    if (population1 > population2) {
      score++;
      scoreOutput.innerHTML = `SCORE: ${score}`;

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

      population1 = countriesList[randomCountry1].population;

      population2 = countriesList[randomCountry2].population;

      console.log(population1, population2);
    } else {
      loseScreen.classList.add("show");

      // game.classList.add("game-over");

      loseScreenScore.innerHTML = `Score: ${score}`;

      countryBox1.classList.add("hide");
      countryBox2.classList.add("hide");

      scoreOutput.classList.add("hide");

      boxes.classList.remove("boxes-grid");
      boxes.classList.add("boxes-flex");
    }
  } else if (e === 2) {
    if (population2 > population1) {
      score++;
      scoreOutput.innerHTML = `SCORE: ${score}`;

      console.log("FIRST WINS");

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

      population1 = countriesList[randomCountry1].population;

      population2 = countriesList[randomCountry2].population;

      console.log(population1, population2);
    } else {
      loseScreen.classList.add("show");

      // game.classList.add("game-over");

      loseScreenScore.innerHTML = `Score: ${score}`;

      countryBox1.classList.add("hide");
      countryBox2.classList.add("hide");

      scoreOutput.classList.add("hide");

      scoreOutput.classList.add("hide");
      countryBox2.classList.add("hide");

      // loseScreen.classList.add("opacity");

      boxes.classList.remove("boxes-grid");
      boxes.classList.add("boxes-flex");
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

  population1 = countriesList[randomCountry1].population;

  population2 = countriesList[randomCountry2].population;

  console.log(population1, population2);
}
