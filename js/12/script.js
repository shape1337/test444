const colorInput = document.getElementById('colorInput');
const button = document.getElementById('changeColorButton');

button.addEventListener('click', () => {
    const color = colorInput.value;
    document.body.style.backgroundColor = color;
});
