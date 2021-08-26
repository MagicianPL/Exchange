const amountCurrencyOne = document.querySelector(".amount-one");
const amountCurrencyTwo = document.querySelector(".amount-two");
const currencyOne = document.querySelector("#currency-one");
const currencyTwo = document.querySelector("#currency-two");
const swapBtn = document.querySelector(".swap");
const infoAboutRate = document.querySelector(".rate-info");

//"https://exchange-rates.abstractapi.com/v1/live/?api_key=2249da7bff9a45dcacf4b37dbeb05c72&base=USD&target=EUR"

const calculate = () => {
	infoAboutRate.textContent = "Pobieranie danych...";
	fetch(`https://exchange-rates.abstractapi.com/v1/live/?api_key=2249da7bff9a45dcacf4b37dbeb05c72&base=${currencyOne.value}&target=${currencyTwo.value}`)
	.then(resp => resp.json())
	.then(data => {
		const currency1 = currencyOne.value;
		const currency2 = currencyTwo.value;
		
		const rate = data.exchange_rates[currency2].toFixed(2);
		
		infoAboutRate.textContent = `${amountCurrencyOne.value} ${currency1} to `+((rate * amountCurrencyOne.value).toFixed(2))+" "+currency2;
		amountCurrencyTwo.value = (amountCurrencyOne.value * rate).toFixed(2);
		
		
	});
};

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountCurrencyOne.addEventListener("input", calculate);

calculate();