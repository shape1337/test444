const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Получаем значения полей ввода
    const field1 = document.getElementById('name').value;
    const field2 = document.getElementById('email').value;

    // Проверяем, заполнены ли оба поля
    if (!field1 || !field2) {
        alert('Ошибка валидации: оба поля должны быть заполнены.');
    } else {
        alert('Форма успешно отправлена!');
    }
});
