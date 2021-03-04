const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const img = document.querySelector('img');
const msg = document.querySelector('.message');

const images = [
  'img/img1.jpg',
  'img/img2.jpg',
  'img/img3.jpg',
  'img/img4.jpg',
  'img/img5.jpg'
];

let num = 3;
leftBtn.addEventListener('click', () => {
  if (num !== 1) {
    num--;
    img.src = `img/img${num}.jpg`;
    console.log(num);
  } else {
    msg.innerHTML = `Thats it!`;
    msg.style.visibility = 'visible';
    setTimeout(() => {
      msg.style.visibility = 'hidden';
    }, 1500);
  }
});

rightBtn.addEventListener('click', () => {
  if (num !== 5) {
    num++;
    img.src = `img/img${num}.jpg`;
    console.log(num);
  } else {
    msg.innerHTML = `That's it!`;
    msg.style.visibility = 'visible';
    setTimeout(() => {
      msg.style.visibility = 'hidden';
    }, 1500);
  }
});
