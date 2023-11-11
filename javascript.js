const colorLine = document.querySelector('.color-line');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY / (document.body.offsetHeight - window.innerHeight);
    const color = `rgb(${255 - scrollPosition * 255}, ${scrollPosition * 255}, ${scrollPosition * 255})`;
    colorLine.style.background = color;
});

colorLine.addEventListener('mouseout', () => {
    colorLine.style.background = 'linear-gradient(to right, red, green, blue, red)';
});
