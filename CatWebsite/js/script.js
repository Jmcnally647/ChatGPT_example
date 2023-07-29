// script.js
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.cat-card button');
  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      alert('Please contact us for more information about this cat.');
    });
  });
});
