const url = "https://restcountries.com/v3.1/name/";
const input = document.querySelector("input");

const template = document.querySelector("template");
const div = document.querySelector(".card");

let a;

const form = document.querySelector(".form");

// input.addEventListener("input", () => {
//   console.log(input.value);
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(url + input.value)
    .then((data) => {
      return data.json();
    })
    .then((posts) => {
      updateUl(posts);
    })
    .catch();
});

function updateUl(data) {
  div.innerHTML = "";
  console.log(data[0]);

  const clone = template.content.cloneNode(true);
  const image = clone.querySelector("img");
  const name = clone.querySelector(".name");
  const population = clone.querySelector(".population");
  const tld = clone.querySelector(".tld");
  const continents = clone.querySelector(".continants");
  const borders = clone.querySelector(".borders");
  const capital = clone.querySelector(".capital");
  const area = clone.querySelector(".area");

  name.textContent = ` ${data[0].name.common}`;
  console.log(data[0].name.common);
  population.textContent = `Population : ${data[0].population} person`;
  tld.textContent = `Tld : ${data[0].tld}`;
  continents.textContent = `Continants : ${data[0].continents}`;
  borders.textContent = `Borderline : ${data[0].borders}`;
  capital.textContent = `Capital : ${data[0].capital}`;
  area.textContent = `Area : ${data[0].area} km^2`;

  image.src = data[0].flags.svg;
  image.alt = data[0].flags.alt;
  image.width = 250;

  div.appendChild(clone);

  input.value = "";
}
