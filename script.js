let counter = 2;
setInterval(function () {
  document.getElementById('radio-' + counter).checked = true;
  document.querySelector('.first').style.marginLeft = `${(counter - 1) * -20}%`;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 5000);
