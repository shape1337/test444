const header = document.getElementById('header');
const button = document.getElementById('changeTextButton');

button.addEventListener('click', () => {
    header.textContent = 'Пока, мир';
});
