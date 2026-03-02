const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultDisplay = document.getElementById('resultDisplay');

// Функция получения чисел из инпутов с проверкой
function getNumbers() {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);

    if (isNaN(a) || isNaN(b)) {
        return { error: 'Ошибка: введите оба числа' };
    }
    return { a, b };
}

// Функции операций
function sum(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) {
    if (b === 0) return 'Ошибка: деление на ноль';
    return a / b;
}

// Обновление результата
function calculate(operation) {
    const nums = getNumbers();
    if (nums.error) {
        resultDisplay.textContent = nums.error;
        return;
    }
    const result = operation(nums.a, nums.b);
    resultDisplay.textContent = result;
}

// Обработчики событий
document.getElementById('sum').addEventListener('click', () => calculate(sum));
document.getElementById('sub').addEventListener('click', () => calculate(sub));
document.getElementById('mul').addEventListener('click', () => calculate(mul));
document.getElementById('div').addEventListener('click', () => calculate(div));
