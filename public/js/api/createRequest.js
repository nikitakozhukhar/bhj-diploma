/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {

  const xhr = new XMLHttpRequest();
  const formData = new FormData();
  xhr.responseType = 'json';

  if (!options.method || !options.url) {
    return
  }

  xhr.open(options.method, options.url);
  if (options.method == 'GET') {
    xhr.send();
  } else {
    for (let [key, value] of Object.entries(options.data)) {
      formData.append(key, value);
      xhr.send(formData);
    }

  }
  try {

    callback = (err, response) => {
      console.log('Ошибка, если есть', err);
      console.log('Данные, если нет ошибки', response);
    }

  }
  catch (error) {
    console.error('Ошибка, если есть', error);
  }
};