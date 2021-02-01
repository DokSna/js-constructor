import { block } from '../utils';
export class Sidebar {
  constructor(selector) {
    this.$el = document.querySelector(selector);

    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    // сразу после инициализации, когда мы собрали DOM, мы начинаем слушать событие submit
    this.$el.addEventListener('submit', this.add);
  }

  get template() {
    return [
      block('text'), //добавление нескольких блоков через массив
      block('title'),
    ].join('');

    //return block('text'); //добавление одного блока в сайдбар

    //// return '<h1>template</h1>';
  }

  add(event) {
    event.preventDefault(); //и страница не перезагружается при нажатии кнопки
  }
}
