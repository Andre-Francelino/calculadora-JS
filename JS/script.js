let display = document.getElementById('display');
let operator = '';
let firstValue = '';
let secondValue = '';

function appendNumber(number) {
    if (operator) {
        secondValue += number;
        display.value = secondValue;
    } else {
        firstValue += number;
        display.value = firstValue;
    }
}

function setOperator(op) {
    if (firstValue) {
        operator = op;
    }
}

function calculate() {
    if (firstValue && secondValue && operator) {
        let result;
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(secondValue);

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }

        display.value = result.toFixed(2);
        firstValue = result.toString();
        secondValue = '';
        operator = '';
    }
}

function clearDisplay() {
    display.value = '';
    firstValue = '';
    secondValue = '';
    operator = '';
}
