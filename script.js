// Получаем элементы DOM
const resultDisplay = document.getElementById('resultDisplay');
const minusBtn = document.getElementById('minusBtn');
const plusBtn = document.getElementById('plusBtn');
const messageBox = document.getElementById('messageBox');

// Текущее значение счётчика
let counter = 0;

// Функция обновления интерфейса
function updateUI() {
    // 1. Обновляем текст результата
    resultDisplay.textContent = counter;

    // 2. Меняем цвет фона в зависимости от значения
    if (counter > 0) {
        resultDisplay.style.backgroundColor = 'yellow';  // положительные
        resultDisplay.style.color = 'black';            // текст чёрный для контраста
    } else if (counter < 0) {
        resultDisplay.style.backgroundColor = 'green';  // отрицательные
        resultDisplay.style.color = 'white';
    } else {
        resultDisplay.style.backgroundColor = 'red';    // ноль
        resultDisplay.style.color = 'white';
    }

    // 3. Управление активностью кнопок
    plusBtn.disabled = counter >= 10;
    minusBtn.disabled = counter <= -10;

    // 4. Показываем сообщение при достижении ±10
    if (counter === 10 || counter === -10) {
        messageBox.textContent = '⚠️ Вы достигли экстремального значения!';
    } else {
        messageBox.textContent = '';  // убираем сообщение
    }
}

// Обработчики событий
plusBtn.addEventListener('click', () => {
    counter++;
    updateUI();
});

minusBtn.addEventListener('click', () => {
    counter--;
    updateUI();
});

// Начальная инициализация (устанавливаем цвета и состояние кнопок)
updateUI();