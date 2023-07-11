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
    } else {
      this.registerEvents();
    }
  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    const dismis = document.querySelectorAll('#data-dismiss');
    dismis.forEach(elem => {
      elem.addEventListener('click', () => {
        if (this.element.getAttribute('data-dismiss') == "modal") {
          this.onClose(this.element);
          this.close();
          this.open()
        }
      })
    })
    
  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose(e) {
    e.addEventListener('click', () => {
      this.close()
    })
  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
    this.element.style.display = 'block'
  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){
    this.element.style.display = 'none'
  }
}