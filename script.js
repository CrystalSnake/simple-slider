let counter = 1;

const slides = document.querySelector('.slides');
slides.style.width = `fit-content`;

const slideList = document.querySelectorAll('.slide');
slideList.forEach((slide) => (slide.style.width = `${100 / slideList.length}`));

function slide() {
  document.querySelector('.first').style.marginLeft = `${
    (counter - 1) * -(100 / slideList.length)
  }%`;
  document.getElementById('radio-' + counter).checked = true;
}

setInterval(function () {
  slide();
  counter++;
  if (counter > slideList.length) {
    counter = 1;
  }
}, 5000);

const radios = document.querySelectorAll('input');
radios.forEach(
  (item, index) =>
    (item.onclick = () => {
      counter = index + 1;
      slide();
    })
);

const next = document.querySelector('.next');
next.addEventListener('click', () => {
  if (counter < slideList.length) {
    counter++;
  }

  slide();
});

const prev = document.querySelector('.prev');
prev.addEventListener('click', () => {
  if (counter > 1) {
    counter--;
  }
  slide();
});
