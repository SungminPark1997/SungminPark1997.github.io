const background = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const image = background[Math.floor(Math.random() * background.length)];
const bgImage = `img/${image}`;

document.body.style.backgroundImage = `url(${bgImage})`;
