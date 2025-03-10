const amount = document.getElementById('amount');

amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g

  amount.valeu = amount.value.replace(hasCharactersRegex, '');
})