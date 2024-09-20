let currentInput = '';
let operation = '';
let firstOperand = '';

function appendNumber(number) {
    if (currentInput.length < 16) { // Limit length of input
        currentInput += number;
        updateDisplay();
    }
}

function setOperation(op) {
    if (currentInput === '' && op === '-') {
        currentInput = '-';
    } else if (currentInput !== '') {
        firstOperand = currentInput;
        operation = op;
        currentInput = '';
    }
}

function calculateResult() {
    if (currentInput !== '' && firstOperand !== '') {
        let result;
        const first = parseFloat(firstOperand);
        const second = parseFloat(currentInput);
        switch (operation) {
            case '+':
                result = first + second;
                break;
            case '-':
                result = first - second;
                break;
            case '*':
                result = first * second;
                break;
            case '/':
                result = first / second;
                break;
        }
        currentInput = result.toString();
        firstOperand = '';
        operation = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    firstOperand = '';
    operation = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}