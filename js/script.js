var dice = document.querySelector(".circle-dice");
dice.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".advice-id").textContent = data.slip.id;
      document.querySelector(".qoute").textContent = data.slip.advice;
    })
    .catch((error) => console.log(error));
});
