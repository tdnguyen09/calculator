const display = document.getElementById('display')
let operatorClicked = '';
let previousNumber = '';
let currentNumber = '';

function addToDisplay(input){
    if ((display.value).length < 11){
    currentNumber += input
    display.value = currentNumber
    console.log(currentNumber)
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
        operators.forEach(eachOperator => eachOperator.classList.remove('active'))
        operator.classList.add('active')
        operatorClicked = operator.innerHTML
        previousNumber = display.value
        currentNumber = '';
        console.log(operatorClicked)
    })
})

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
    operators.forEach(operator => operator.classList.remove('active'))
    currentNumber = "";
    display.value = "";
    operatorClicked ="";
})

const equal = document.getElementById('equal')
equal.addEventListener('click', () => {
    operators.forEach(operator => operator.classList.remove('active'))
    try{
        let result;
        switch(operatorClicked){
            case '+':
                result = eval(currentNumber) + eval(previousNumber)
                break;
            case '-':
                result = eval(previousNumber) - eval(currentNumber)
                break;
            case '×':
                result = eval(previousNumber) * eval(currentNumber)
                break;
            case '÷':
                result = eval(previousNumber) / eval(currentNumber)
                break;
            default:
                display.value = currentNumber;
                return;
        }
        display.value = parseFloat(result.toPrecision(9))
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
