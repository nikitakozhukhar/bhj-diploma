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

  try {

    if (options.method == 'GET') {
      xhr.send();
    }

    if (options.method == 'POST') {
      for (let [key, value] of Object.entries(options.data)) {
        formData.append(key, value);
      }
      
      xhr.send(formData);
    }

    options.callback()
  }

  catch (error) {
    console.error('Ошибка, если есть', error);
  }
 
  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
      console.log(xhr.response.error);
    }
  };

};


// createRequest({
//   url: '/user',
//   data: {
//     mail: 'ivan@biz.pro',
//     password: 'odinodin'
//   },
//   method: 'POST',
//   callback: (e, r) => {
//     console.log(e, r)
//   }
// })
