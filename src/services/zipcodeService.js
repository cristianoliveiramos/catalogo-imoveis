export const cep = `https://viacep.com.br/ws/${cep}/json`

fetch(cep)
  .then(res => res.ok)
  .then(res => res.json())
  .catch(console.error())