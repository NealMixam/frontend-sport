import Inputmask from 'inputmask';

let attemptCount = 0;
let isBlocked = false;

document.addEventListener('DOMContentLoaded', function () {
  var phoneInput = document.getElementById('phone');
  var phoneMask = new Inputmask('+7 (999) 999-99-99');
  phoneMask.mask(phoneInput);

  var phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

  document.getElementById('form').addEventListener('submit', function (event) {
    if (!phonePattern.test(phoneInput.value)) {
      alert('Пожалуйста, введите корректный номер телефона.');
      event.preventDefault();
    }
  });

  function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const nameValue = nameInput.value;
    nameError.innerText = '';

    if (/^[a-zA-Z]/.test(nameValue)) {
      nameError.innerText = 'Пожалуйста вводите только кириллицу';
      return false;
    }

    if (/^\d/.test(nameValue)) {
      nameError.innerText = 'Пожалуйста вводите только буквы';
      return false;
    }

    if ((nameValue.match(/'/g) || []).length > 1) {
      nameError.innerText = 'Допускается не более одного апострофа';
      return false;
    }

    if (nameValue.length > 15) {
      nameError.innerText = 'Не более 15 символов';
      return false;
    }

    return true;
  }

  function validateForm() {
    if (isBlocked) return;

    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');

    if (nameInput.value.trim() === '') {
      nameError.innerText = 'Поле должно быть заполнено';
      return;
    }

    if (!validateName()) {
      attemptCount++;
      if (attemptCount > 3) {
        blockInput();
      }
      return;
    }

    alert('Форма отправлена!');
    attemptCount = 0;
    nameError.innerText = '';
  }

  function blockInput() {
    isBlocked = true;
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    nameInput.disabled = true;
    let timer = 30;

    const interval = setInterval(() => {
      nameError.innerText = `Ввод заблокирован на ${timer} секунд`;
      if (timer <= 0) {
        clearInterval(interval);
        nameInput.disabled = false;
        nameError.innerText = '';
        attemptCount = 0;
        isBlocked = false;
      }
      timer--;
    }, 1000);
  }

  document.getElementById('name').addEventListener('input', validateName);

  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!phonePattern.test(phoneInput.value)) {
      alert('Пожалуйста, введите корректный номер телефона.');
      return;
    }

    var formData = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert('Данные успешно отправлены!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Произошла ошибка при отправке данных.');
      });
  });
});
