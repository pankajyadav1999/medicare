document.getElementById('fadeButton').addEventListener('click', function () {
    var image = document.getElementById('image');
    image.classList.toggle('fade'); // Toggling the fade class
    image.style.opacity = image.style.opacity === '0' ? '1' : '0'; // Fade in or out
  });