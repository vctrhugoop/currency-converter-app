const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');

amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g

  amount.valeu = amount.value.replace(hasCharactersRegex, '');
})

form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case 'USD':
      convertCurrency(amount.value, 5.3, 'US$')
      break
    case 'EUR':
      convertCurrency(amount.value, 6.2, '€')
      break
    case 'GBP':
      convertCurrency(amount.value, 7.1, '£')
      break
  }
}

function convertCurrency(amount, price, symbol,) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    let total = amount * price

    if (isNaN(total)) {
      throw new Error("Valor inválido")
    }

    total = formatCurrencyBRL(total).replace("R$", "")
    result.textContent = `${total} Reais`

    footer.classList.add('show-result')
  } catch (error) {
    console.error(error)
    footer.classList.remove('show-result')
    alert("Não foi possível realizar a conversão")
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}