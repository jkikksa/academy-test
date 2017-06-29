'use strict';

var ERROR_MAP = {
  400: 'Неверный запрос',
  401: 'Требуется аутентификация',
  404: 'Адрес не найден',
  500: 'Ошибка сервера'
};

var TIMEOUT = 10000;

module.exports = function (url, onLoad) {
  var xhr = new XMLHttpRequest();

  xhr.responseType = 'json';
  xhr.open('GET', url);
  xhr.timeout = TIMEOUT;

  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      onLoad(xhr.response);
    } else {
      // eslint-disable-next-line
      console.log(ERROR_MAP[xhr.status] || 'Неизвестная ошибка');
    }
  });

  xhr.addEventListener('error', function () {
    // eslint-disable-next-line
    console.log('Ошибка соединения');
  });

  xhr.addEventListener('timeout', function () {
    // eslint-disable-next-line
    console.log('Превышено время ожидания');
  });

  xhr.send();
};
