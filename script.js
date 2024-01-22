const button = document.querySelector('.forecast-btn');
const forecastTitle = document.querySelector('.current-forecast h1');
const forecastPercentage = document.querySelector('.current-forecast p');
const forecastsList = document.querySelector('.forecasts');
const forecastTemplate = document.getElementById('forecast-item');
const predictions = [
    { text: 'Сегодня у вас будет хороший день', percentage: generatePercentage() },
    { text: 'Близкий человек предаст вас', percentage: generatePercentage() },
    { text: 'Сегодня тебя ждёт приятный сюрприз', percentage: generatePercentage() },
    { text: 'Никому не верь', percentage: generatePercentage() },
    { text: 'Всё будет хорошо', percentage: generatePercentage() }
];

button.addEventListener('click', function() {
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    forecastTitle.textContent = randomPrediction.text;
    forecastPercentage.textContent = 'Вероятность: ' + randomPrediction.percentage + '%';

    addNewForecast(randomPrediction, forecastsList);
});

function addNewForecast(prediction, list) {
    const newForecastItem = forecastTemplate.content.cloneNode(true);
    newForecastItem.querySelector('h3').textContent = prediction.text;
    newForecastItem.querySelector('p').textContent = 'Вероятность: ' + prediction.percentage + '%';
    list.prepend(newForecastItem);
}

function generatePercentage() {
    return Math.floor(Math.random() * 101); 
} 

/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
