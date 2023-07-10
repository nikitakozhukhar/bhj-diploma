/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью Modal.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element){
    this.element = element;
    if (!element) {
      throw new Error('Элемент не получен')
    }
  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    const close = document.querySelectorAll('#data-dismiss');
    close.forEach(e => {
      e.addEventListener('click', () => {
        this.open();
      })
    })
    if (this.element.getAttribute('data-dismiss') == "modal") {
      this.element.Modal.onClose();
    }
    
  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose(e) {
    
  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {

  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){

  }
}