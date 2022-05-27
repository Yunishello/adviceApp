var element = document.querySelector(".form-select");
// console.log(element);
element.addEventListener("change", function () {
  const val = this.value;
  const prg = document.querySelector(".paragraph");
  switch (val) {
    case "1":
      fetch("https://catfact.ninja/fact") //"https://catfact.ninja/fact"
        .then((response) => response.json())
        .then((response) =>
          response.entries.forEach((element) => {
            console.log(element);
          })
        )
        .catch((err) => console.error(err));
      prg.textContent = val;
      break;
    case "2":
      fetch("https://catfact.ninja/fact") //"https://catfact.ninja/fact"
        .then((response) => response.json())
        .then((response) => (prg.textContent = response.fact))
        .catch((err) => console.error(err));
      prg.textContent = val;
      break;

    default:
      prg.textContent = "Please choose an option";
      break;
  }
});

var hours = new Date().getHours();
const greetings = document.querySelector(".greetings");
if (hours < 12) {
  greetings.textContent = "Morning";
} else if (hours < 16) {
  greetings.textContent = "Afternoon";
} else if (hours < 24) {
  greetings.textContent = "Evening";
}
