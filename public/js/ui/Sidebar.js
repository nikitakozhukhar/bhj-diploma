/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const openButton = document.querySelector('.sidebar-toggle');
    const sideBarMini = document.querySelector('.sidebar-mini');

    openButton.addEventListener('click', () => {
      sideBarMini.classList.toggle('sidebar-open');
      sideBarMini.classList.toggle('sidebar-collapse')
    })
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const auth = document.querySelector('.menu-item_login');
    auth.addEventListener('click', () => {
      App.getModal( 'login' ).open();
    })

    const register = document.querySelector('.menu-item_register');
    register.addEventListener('click', () => {
      App.getModal( 'register' ).open() 
    })

    const logout = document.querySelector('.menu-item_logout');
    logout.addEventListener('click', () => {
       let callback = function(response, err) {
        console.log(response);
        if (response.success == true) {
          App.setState('init');
        }
      };
      User.logout(callback);
      
      // if (response.success == 'true'){
      //   App.setState( 'init' )
      // }
    })
  }
}