/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  if (!options.method || !options.url) {
    return
  }
  const xhr = new XMLHttpRequest();
  const formData = new FormData();
  xhr.responseType = 'json';

 

  xhr.open(options.method, options.url);
  console.log(xhr.respose);
  if (options.method == 'GET') {
    xhr.send();
    console.log(xhr.respose);
  }
  if (options.method == 'POST') {

    for (let [key, value] of Object.entries(options.data)) {
      console.log(key, value);
      formData.append(key, value);
      xhr.open(options.method, options.url)
    }
    xhr.send(formData);
      
  }
  try {
    callback: (err, response) => {
      console.log('Ошибка, если есть', err);
      console.log('Данные, если нет ошибки', response);
    }
  }
  catch (error) {
    console.error('Ошибка, если есть', error);
  }
 
  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
      console.log(`Готово, получили ${xhr.response}`);
    }
  };
  xhr.onerror = function () {
    console.log("Запрос не удался");
  };
  

};


createRequest({
  url: '/user',
  data: {
    mail: 'ivan@biz.pro',
    password: 'odinodin'
  },
  method: 'POST',
  callback: (e, r) => {
    console.log(e, r)
  }
})
