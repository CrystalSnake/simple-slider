let counter = 2;

function slide(counter) {
  document.querySelector('.first').style.marginLeft = `${(counter - 1) * -20}%`;
}

setInterval(function () {
  document.getElementById('radio-' + counter).checked = true;
  slide(counter);
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
      slide(counter);
    })
);
