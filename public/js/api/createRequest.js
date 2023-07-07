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
    console.log(options.data);
  
    for (let [key, value] of Object.entries(options.data)) {
      console.log(key, value);
      formData.append(Object.key, Object.value);
      console.log(formData);
      // xhr.send(formData);
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

  xhr.onload = function() {
    if (xhr.status != 200) { 
      console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
      console.log(`Готово, получили ${xhr.response}`); 
    }
  };

  xhr.onerror = function() {
    alert("Запрос не удался");
  };

};


createRequest({
  url: '/user',
  data: {
    mail: 'ivan@biz.pro',
    password: 'odinodin'
  },
  method: 'POST',
  callback: (e,r) => {
    console.log(e,r)
    }
})
