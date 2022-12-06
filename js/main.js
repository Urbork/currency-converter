// {
//   const amountElement = document.querySelector(".js-amount");
//   const currencyElement = document.querySelector(".js-currency");
//   const formElement = document.querySelector(".js-form");
//   const resultElement = document.querySelector(".js-result");

//   const eurRate = 4.66;
//   const usdRate = 4.5;
//   const gbpRate = 5.4;
//   const chfRate = 4.74;

//   formElement.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const amount = amountElement.value;
//     const currency = currencyElement.value;
//     let currencyRate;

//     switch (currency) {
//       case "EUR":
//         currencyRate = eurRate;
//         break;
//       case "USD":
//         currencyRate = usdRate;
//         break;
//       case "GBP":
//         currencyRate = gbpRate;
//         break;
//       case "CHF":
//         currencyRate = chfRate;
//     }

//     const result = amount / currencyRate;
//     resultElement.innerText = `${amount} PLN = ${result.toFixed(
//       2
//     )} ${currency}`;
//   });

//   formElement.addEventListener("reset", () => {
//     resultElement.innerText = "N/A";
//   });
// }
{
  const calculateResult = (amount, currency) => {
    const eurRate = 4.66;
    const usdRate = 4.5;
    const gbpRate = 5.4;
    const chfRate = 4.74;

    switch (currency) {
      case "EUR":
        return amount / eurRate;
      case "USD":
        return amount / usdRate;
      case "GBP":
        return amount / gbpRate;
      case "CHF":
        return amount / chfRate;
    }
  };

  const resultElement = document.querySelector(".js-result");

  const updateResultText = (amount, result, currency) => {
    const resultAccuracy = 2;

    resultElement.innerText = `${amount} PLN = ${result.toFixed(
      resultAccuracy
    )} ${currency}`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResultText(amount, result, currency);
  };

  const onFormReset = () => {
    resultElement.innerText = "N/A";
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
    formElement.addEventListener("reset", onFormReset);
  };

  init();
}
