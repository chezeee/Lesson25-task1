const currencyCards = document.querySelectorAll("button");

currencyCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
  });
});
