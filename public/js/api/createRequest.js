/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  
  if (!options.method || !options.url) {
    return
  }

  try {
    xhr.open( options.method, options.url );
    callback: ( err, response ) => {
      /*
        при успешном выполнении err = null, response содержит данные ответа
      */
      console.log( err ); // null
      console.log( response ); // ответ
    }
    if (options.method == 'GET') {
      xhr.send();
    } else {
      xhr.send(options.data);
    }
  }
  catch(error) {
    calback(error)
  }

 return xhr
 
};