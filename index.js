const CC = require('currency-converter-lt')
let currencyConverter = new CC({from:"USD", to:"RUB", amount:1})

currencyConverter.convert().then((response) => {
    console.log(`Result: ${response}`) //or do something else
})
