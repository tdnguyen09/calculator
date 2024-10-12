const display = document.getElementById('display')

function addToDisplay(input){
    if ((display.value).length < 11){
    display.value += input
    }
}

const numbers = document.querySelectorAll('.number')
numbers.forEach(number => {
    number.addEventListener('click', () => {
        let numberInput = number.innerHTML
        addToDisplay(numberInput)
    })
})

const operators = document.querySelectorAll('.operator')
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        let operatorInput = operator.innerHTML
        addToDisplay(operatorInput)
    })
})

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
    display.value = "";
})

const equal = document.getElementById('equal')
equal.addEventListener('click', () => {
    try{
        display.value = eval(display.value)
    }
    catch(error) {
        display.value = 'Error'
    }
})

const clearLastIndex = document.getElementById('AC')
clearLastIndex.addEventListener('click', () => {
    display.value = (display.value).slice(0,-1)
})

const percent = document.getElementById('percent')
percent.addEventListener('click', () => {
    if (display.value !== '' && !isNaN(display.value)) {
        display.value = display.value / 100;
    } else {
        display.value = 'Error';
    }
})
