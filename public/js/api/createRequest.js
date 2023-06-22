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

  xhr.open( options.method, options.url );
  if (options.method == 'GET') {
    xhr.send();
  } else {
    formData = new FormData;
    formData.append( `${Object.keys(options.data)[0]}, ${options.data.mail}`);
    formData.append( `${Object.keys(options.data)[1]}, ${options.data.password}`);

    xhr.open( 'POST', 'https://example.com' );
    xhr.send( formData );
    xhr.send(options.data);
  }
  try {
    
    callback: ( err, response ) => {
      /*
        при успешном выполнении err = null, response содержит данные ответа
      */
      console.log( 'Ошибка, если есть', err  ); // null
      console.log( 'Данные, если нет ошибки', response ); // ответ
    }
   
  }
  catch(error) {
    callback(error)
  }
};


createRequest({
  url: '/user',
  data: {
    mail: 'ivan@biz.pro',
    password: 'odinodin'
  },
  method: 'GET',
})