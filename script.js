let counter = 1;

function slide() {
  document.querySelector('.first').style.marginLeft = `${(counter - 1) * -20}%`;
  document.getElementById('radio-' + counter).checked = true;
}

setInterval(function () {
  slide();
  counter++;
  if (counter > 5) {
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
  if (counter < 5) {
    counter++;
  }

  slide();
});

const prev = document.querySelector('.prev');
prev.addEventListener('click', () => {
  if (counter > 2) {
    counter--;
  }
  slide();
});
