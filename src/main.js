const searchBtn = document.querySelector('.search-btn')
searchBtn.addEventListener('click', handleSearch)

const inputCoin1 = document.querySelector('#coin-input-1')
const inputCoin2 = document.querySelector('#coin-input-2')
const title = document.querySelector('.title')

function fetchApi (coin1, coin2) {
    const url = `https://economia.awesomeapi.com.br/json/last/${coin1}-${coin2}`
    const coins = `${coin1}${coin2}`
    return fetch(url)
    .then(response => response.json())
    .then(data => data[coins])
    // .then(data => data.bid)
}

function handleSearch () {
    const coin1 = inputCoin1.value
    const coin2 = inputCoin2.value

    

    fetchApi(coin1, coin2)
    .then(data => title.innerHTML = `O valor de 1 ${data.code} é: 
        ${data.bid} ${data.codein}`);
    
}




