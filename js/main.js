let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

let eurRate = 4.66;
let usdRate = 4.5;
let gbpRate = 5.4;
let chfRate = 4.74;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = amountElement.value;
  let currency = currencyElement.value;
  let currencyRate;

  switch (currency) {
    case "EUR":
      currencyRate = eurRate;
      break;
    case "USD":
      currencyRate = usdRate;
      break;
    case "GBP":
      currencyRate = gbpRate;
      break;
    case "CHF":
      currencyRate = chfRate;
  }

  let result = amount / currencyRate;
  resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
});

formElement.addEventListener("reset", () => {
  resultElement.innerText = "N/A";
});
